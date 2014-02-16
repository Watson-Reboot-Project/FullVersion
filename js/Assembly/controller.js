/**
 * Controls the interpreter and initializer functions
 * @tableName - gives the table that the controller will be using
 * @varTable - gives the variable table that is used
 * @figureMode - sets the flag that signals Figure or Architecture Mode
 */
function controller(tableName, varTable, figureMode) {
	// Name of the HTML table being used
	this.tableName = tableName;
	
	// Determines if in Figure or Architecture mode
	// True for Figure, False if Architecture
	this.figureMode = figureMode;
	
	// Has the table been edited recently?
	// Set to true by default
	this.edited = true;
	
	// Initial program counter
	// Increased when .Block and .Word is used/modified
	this.programCounter = 0;
	
	// Current program counter
	// Kept constant
	this.startCounter = this.programCounter;
	
	// Alerts the controller that the program has finished
	this.stop = false;
	
	// List of used variables
	// More important in figure mode
	this.variables = [];
	
	// List of memory labels
	// Helps with memory lookup
	this.labels = [];
	
	// For ease of adjustment later
	// References to Column # of each attribute
	this.labelNum = 2;
	this.cmdNum = 3;
	this.arg1Num = 4;
	this.arg2Num = 5;
	this.arg3Num = 6;
	
	// Information Storage for Registers
	// Also gives flag about if Registers are used
	// Initial firstChild.nodeValues set to 0 and false
	this.register = [
	                 ["Reg0", 0, false], // Reg0
	                 ["Reg1", 0, false], // Reg1
	                 ["Reg2", 0, false], // Reg2
	                 ["Reg3", 0, false], // Reg3
	                 ["Reg4", 0, false], // Reg4
	                 ["Reg5", 0, false], // Reg5
	                 ["Reg6", 0, false], // Reg6
	                 ["Reg7", 0, false], // Reg7
	                 ["Reg8", 0, false], // Reg8
	                 ["Reg9", 0, false], // Reg9
	                 ["RegA", 0, false], // RegA
	                 ["RegB", 0, false], // RegB
	                 ["RegC", 0, false], // RegC
	                 ["RegD", 0, false], // RegD
	                 ["RegE", 0, false], // RegE
	                 ["RegF", 0, false]  // RegF
	                 ];
	
	// Memory storage
	// Initially zero before starting
	this.memory = new Array(256);
	  for (var i = 0; i < 256; i++) {
	    this.memory[i] = [0,0,0,0];
	  }
	
	// Converts a number to a hexidecimal with defined padding
	this.decimalToHex = function(d, padding) {
	  var hex = Number(d).toString(16);
	  padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

	  while (hex.length < padding) {
	    hex = "0" + hex;
	  }

	  return hex;
	};
	
	// Performs the size checking of a register at index to ensure 16bit functionality
	// If overflow occurs, handles accordingly
	this.checkRegister = function(index) {
		var regValue = this.register[index][1];
		if(regValue >= 32768){
			// Set overflow bit?
		}
		if(regValue < -32768){
			// Set overflow bit?
		}
	};
	
	// Goes through and checks through the table for changes
	// as well as which variables are in use.
	// Initializes the Registers and Variable arrays if needed.
	// If on figure tab, also populates Variable Table.
	this.init = function(){
		var table = document.getElementById(tableName);
		// "Compile"
		var progLine = 0;
		var memLine = 0;
		var refLine = 0;
		var offSet = 0;
		var index = 0;
		
		// Populate the labels array for memory lookup
		while(progLine<table.rows.length){
			if(table.rows[progLine].cells[this.labelNum].firstChild != null && table.rows[progLine].cells[this.labelNum].firstChild.nodeValue != null){
				var ref = table.rows[progLine].cells[this.labelNum].firstChild.nodeValue;
				this.labels[refLine++] = [ref, progLine + offSet];
				if(table.rows[progLine].cells[this.cmdNum].firstChild.nodeValue == ".Block") {
					offSet+=parseInt(table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue, 10)-1;
				}
			}
			progLine++;
		}
		
		// Begin "assembling" into Machine code in this.memory
		progLine=0;
		while(progLine<table.rows.length){
			switch(table.rows[progLine].cells[this.cmdNum].firstChild.nodeValue){
			case ".Word": // .Word before program
				// Store firstChild.nodeValue based on argument
				var arg1 = table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue;
				
				var hex = parseInt(arg1,10);
				// hex length checking goes here.
				hex = this.decimalToHex(hex, 4);
			    // Store in memory and update program counter
				this.memory[memLine++] = [hex[0], hex[1], hex[2], hex[3]];
				this.programCounter++;
				this.startCounter = this.programCounter;
				// Store variable for display
				this.variables[index++] = [table.rows[progLine].cells[this.labelNum].firstChild.nodeValue, arg1];
				break;
			
			case ".Block": // .Block before program
				// Reserve number of rows indicated by argument
				var arg1 = table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue;
				for(var i = 0; i < arg1; i++) {
					this.memory[memLine++] = [0, 0, 0, 0];
					this.programCounter++;
				}
				// Store variable for display
				// Note: May behave strangely with multiple Words
				this.variables[index++] = [table.rows[progLine].cells[this.labelNum].firstChild.nodeValue, 0];
				break;
				
			case "LoadImm":  // 0000b LoadImm
				// Find and flag specified register
				var arg1, arg2;
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Get value to be stored in Register
				arg2 = table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue;
				var hex = parseInt(arg2,10);
				// hex length checking goes here.
				hex = this.decimalToHex(hex, 2);
			    // Store in memory
				this.memory[memLine++] = [0, arg1, hex[0], hex[1]];
				break;	
				
			case "Load":  // 0001b Load
				// Find and flag specified register
				var arg1, arg2, label;
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Find correct memory location via label
				label = table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue;
				for(var i = 0; i < this.labels.length; i++){
					if(this.labels[i][0] === label) {
						arg2 = this.labels[i][1];
						i+=this.labels.length;
					}
				}
				// Break memory up into hex location
				var hex = parseInt(arg2,10);
				hex = this.decimalToHex(hex, 2);
			    // Store in memory and update program counter
				this.memory[memLine++] = [1, arg1, hex[0], hex[1]];
				break;
				
			case "Store":  // 0010b Store
				// Find and flag specified register
				var arg1, arg2, label;
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Find correct memory location via label
				label = table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue;
				for(var i = 0; i < this.labels.length; i++){
					if(this.labels[i][0] === label) {
						arg2 = this.labels[i][1];
						i+=this.labels.length;
					}
				}
				// Convert decimal memory location to hex
				var hex = parseInt(arg2,10);
				hex = this.decimalToHex(hex, 2);
			    // Store in memory and update program counter
				this.memory[memLine++] = [2, arg1, hex[0], hex[1]];
				break;	
				
			case "LoadInd":  // 0011b LoadInd
				var arg1, arg2;
				// Find and flag specified Registers
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue){
						arg2 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Store in memory
				this.memory[memLine++] = [3, arg1, arg2, 0];
				break;
				
			case "StoreInd":  // 0100b StoreInd
				var arg1, arg2;
				// Find and flag specified registers
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue){
						arg2 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Store in memory
				this.memory[memLine++] = [4, arg1, arg2, 0];
				break;	
				
			case "Add":  // 0101b Add
				var arg1, arg2, arg3;
				// Find and flag the specified registers
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue){
						arg2 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue){
						arg3 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Store in memory
				this.memory[memLine++] = [5, arg1, arg2, arg3];
				break;
				
			case "Sub":  // 0110b Subtract
				var arg1, arg2, arg3;
				// Find and flag specified registers
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue){
						arg2 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue){
						arg3 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Store in memory
				this.memory[memLine++] = [6, arg1, arg2, arg3];
				break;
				
			
			case "And":  // 0111b And
				var arg1, arg2, arg3;
				// Find and flag specified registers
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue){
						arg2 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue){
						arg3 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Store in memory
				this.memory[memLine++] = [7, arg1, arg2, arg3];
				break;
				
			case "Or":  // 1000b Or
				var arg1, arg2, arg3;
				// find and flag specified registers
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue){
						arg2 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue){
						arg3 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Store in memory
				this.memory[memLine++] = [8, arg1, arg2, arg3];
				break;
				
			case "Not":  // 1001b Not
				var arg1, arg2;
				// Find and flag specified registers
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue){
						arg2 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Store in memory
				this.memory[memLine++] = [9, arg1, arg2, 0];
				break;
				
			case "ASL": // 1010b ASL
				var arg1, arg2, arg3;
				// Find and flag specified registers
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue){
						arg2 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Grab # of bits to shift
				arg3 = table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue;
				// Store in memory
				this.memory[memLine++] = [10, arg1, arg2, arg3];
				break;
				
			case "ASR": // 1011b ASR
				var arg1, arg2, arg3;
				// Find and flag specified registers
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg1 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue){
						arg2 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Grab # of bits to shift
				arg3 = table.rows[progLine].cells[this.arg3Num].firstChild.nodeValue;
				// Store in memory
				this.memory[memLine++] = [11, arg1, arg2, arg3];
				break;
				
			case "Compare": // 1100b Compare
				var arg1, arg2, arg3;
				arg1 = 0;
				// Find and flag specified registers
				for(var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
						arg2 = i;
						this.register[i][2] = true;
						break;
					}
				}
				for (var i = 0; i < 16; i++){
					if(this.register[i][0] === table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue){
						arg3 = i;
						this.register[i][2] = true;
						break;
					}
				}
				// Store in memory
				this.memory[memLine++] = [12, arg1, arg2, arg3];
				break;
				
			case "Branch": // 1101b Branch
				var arg1, arg2, label;
				// Determine boolean test
				switch(table.rows[progLine].cells[this.arg1Num].firstChild.nodeValue){
					case 'EQ':
						arg1 = 0;
						break;
					case 'NE':
						arg1 = 1;
						break;
					case 'LT':
						arg1 = 2;
						break;
					case 'LE':
						arg1 = 3;
						break;
					case 'GT':
						arg1 = 4;
						break;
					case 'GE':
						arg1 = 5;
						break;
					case 'CARRY':
						arg1 = 6;
						break;
					case 'NEG':
						arg1 = 7;
						break;
					case 'ZERO':
						arg1 = 8;
						break;
					case 'OVER':
						arg1 = 9;
						break;
				}
				// Find memory location to jump to
				label = table.rows[progLine].cells[this.arg2Num].firstChild.nodeValue;
				for(var i = 0; i < this.labels.length; i++){
					if(this.labels[i][0] === label) {
						arg2 = this.labels[i][1];
						i+=this.labels.length;
					}
				}
				// Convert to hex to store in memory
				var hex = parseInt(arg2,10);
				// hex length checking goes here.
				hex = this.decimalToHex(hex, 2);
			    // Store in memory
				this.memory[memLine++] = [13, arg1, hex[0], hex[1]];
				break;
				
			case "Jump": // 1110b Jump
				var arg1, arg2, label;
				arg1 = 0;
				// Find memory location to jump to
				label = table.rows[progLine].cells[this.arg1].firstChild.nodeValue;
				for(var i = 0; i < this.labels.length; i++){
					if(this.labels[i][0] == label) {
						arg2 = this.labels[i][1];
						i+=this.labels.length;
					}
				}
				// convert to hex to store in memory
				var hex = parseInt(arg2,10);
				// hex length checking goes here.
				hex = this.decimalToHex(hex, 2);
			    // Store in memory
				this.memory[memLine++] = [14, arg1, hex[0], hex[1]];
				break;
				
			case "Halt": // 1111b Halt
				this.memory[memLine++] = [15, 0, 0, 0];
				break;
			}
		progLine++;	
		}
		// Iterate over registers to see which ones are used
		// Create cells in variable array for these registers
		for(var i = 0; i < 16; i++){
			if(this.register[i][2]){
				this.variables[index++] = [this.register[i][0], 0];
			}
		}
		// Signal that program has been parsed
		this.edited = false;
	};
	
	// Add two registers and store in the first
	// Logically: Reg1 = Reg2 + Reg3
	this.add = function(reg1, reg2, reg3){
		this.register[reg1][1] = this.register[reg2][1]+this.register[reg3][1];
		// Update value in Variable array
		for(var i = 0; i < this.variables.length; i++){
			if(this.variables[i][0] == this.register[reg1][0]){
				this.variables[i][1] = this.register[reg1][1];
				break;
			}
		}
		// Debugging/Demo code
		console.log("Add " + this.register[reg2][0] + " and " + this.register[reg3][0]);
		console.log(this.register[reg1][0]+ "= " +this.register[reg1][1]);
	};

	// Subtract two registers and store in the first
	// Logically: Reg1 = Reg2 - Reg3
	this.sub = function(reg1, reg2, reg3){
		this.register[reg1][1] = this.register[reg2][1]-this.register[reg3][1];
		// Update value in Variable array
		for(var i = 0; i < this.variables.length; i++){
			if(this.variables[i][0] == this.register[reg1][0]){
				this.variables[i][1] = this.register[reg1][1];
			}
		}
		// Debugging/Demo code
		console.log("Subtract " + this.register[reg2][0] + " and " + this.register[reg3][0]);
		console.log(this.register[reg1][0]+ "= " +this.register[reg1][1]);
	};

	//Store the data in reg into memory at location pointed to by value1 and value2
	// value1 and value2 are in hex
	this.store = function(reg, value1, value2){
		// Convert data from register into hex
		var hex = this.decimalToHex(this.register[reg][1], 4);
		// Store register data in hex in memory
		this.memory[parseInt(value1 + value2, 16)] = [hex[0],hex[1],hex[2],hex[3]];
		// Update value in Variable array
		var x = parseInt(value1 + value2,16);
		for(var i = 0; i < this.labels.length; i++){
			// Find variable name by memory location
			if(x == this.labels[i][1]){
				for(var j = 0; j < this.variables.length;j++){
					// Find variable by label
					if(this.variables[j][0]==this.labels[i][0]){
						this.variables[j][1] = this.register[reg][1];
					}
				}
			}
		}
		// Debug/Demo code
		console.log("Store " + this.register[reg][0] + " in Memory");
		console.log("Memory @" +x+ " = " + this.memory[x]);
	};

	// Performs Binary And on two registers and stores into the first
	// Logically: Reg1 = Reg2 AND Reg3
	this.and = function(reg1, reg2, reg3){
		this.register[reg1][1]=this.register[reg2][1]&this.register[reg3][1];
		// Update Variable array
		for(var i = 0; i < this.variables.length; i++){
			if(this.variables[i][0] == this.register[reg1][0]){
				this.variables[i][1] = this.register[reg1][1];
			}
		}
	};

	// Performs Binary Or on two registers and stores into the first
	// Logically: Reg1 = Reg2 OR Reg3
	this.or = function(reg1, reg2, reg3){
		this.register[reg1][1]=this.register[reg2][1]|this.register[reg3][1];
		// Update the Variable array
		for(var i = 0; i < this.variables.length; i++){
			if(this.variables[i][0] == this.register[reg1][0]){
				this.variables[i][1] = this.register[reg1][1];
			}
		}
	};

	// Performs Binary Not on a register and stores it into another
	// Logically: Reg1 = NOT Reg2
	this.not = function(reg1, reg2){
		this.register[reg1][1] = ~this.register[reg2][1];
		// Update the Variable array
		for(var i = 0; i < this.variables.length; i++){
			if(this.variables[i][0] == this.register[reg1][0]){
				this.variables[i][1] = this.register[reg1][1];
			}
		}
	};

	// Performs the Arithmetic Shift Left on the given register by #bits
	// Logically: Reg1 = ASL Reg2 #Bits
	this.asl = function(reg1, reg2, bits){
		// Parse number of bits (in hex)
		var tBits = parseInt(bits,16);
		this.register[reg1][1] = this.register[reg2][1] << tBits;
		// Update the variable array
		for(var i = 0; i < 16; i++){
			if(this.variables[i][0] == this.register[reg1][0]){
				this.variables[i][1] = this.register[reg1][1];
			}
		}
	};

	// Performs the Arithmetic Shift Right on the given register by #bits
	// Logically: Reg1 = ASR Reg2 #Bits
	this.asr = function(reg1, reg2, bits){
		// Parse number of bits (in hex)
		var tBits = parseInt(bits,16);
		this.register[reg1][1] = this.register[reg2][1] >>> tBits;
		// Update the variable array
		for(var i = 0; i < this.variables.length; i++){
			if(this.variables[i][0] == this.register[reg1][0]){
				this.variables[i][1] = this.register[reg1][1];
			}
		}
	};

	// Store a value in memory pointed at by another register
	this.storeInd = function(reg1, reg2){
		this.memory[this.register[reg2][1]] = this.register[reg1][1];
		// Updating of the Variable array
		var x = parseInt(this.register[reg2][1],16);
		for(var i = 0; i < this.labels.length; i++){
			// Find memory name via location
			if(x == this.labels[i][1]){
				for(var j = 0; j < this.labels.length;j++){
					// Update via label name
					if(this.variables[j][0]==this.labels[i][0]){
						this.variables[j][1] = this.register[reg1][1];
					}
				}
			}
		}
	};

	// Load value stored in memory into register
	// mem1 and mem2 are in hex
	this.load = function(reg, mem1, mem2){
		// Get value from memory
		var num = this.memory[parseInt(mem1 + mem2, 16)];
		// Store value into register
		this.register[reg][1] = parseInt(num[0]+num[1]+num[2]+num[3], 16);
		// Update Variable array
		for(var i = 0; i < this.variables.length; i++){
			if(this.variables[i][0] == this.register[reg][0]){
				this.variables[i][1] = this.register[reg][1];
			}
		}
		// Debug/Demo Code
		console.log("Load " + this.register[reg][0]);
		console.log(this.register[reg][0]+ "= " +this.register[reg][1]);
	};

	// Load a given value into a register
	// value1 and value2 are in hex
	this.loadImm = function(reg, value1, value2){
		// Parse and store value into register
		this.register[reg][1] = parseInt(value1 + value2, 16);
		// Update Variable array
		for(var i = 0; i < this.variables.length; i++){
			if(this.variables[i][0] == this.register[reg][0]){
				this.variables[i][1] = this.register[reg][1];
			}
		}
		// Debug/Demo code
		console.log("LoadImm " + this.register[reg][0]);
		console.log(this.register[reg][0]+ "= " +this.register[reg][1]);
	};

	// Load into a register the value in memory pointed to by another register
	this.loadInd = function(reg1, reg2){
		// Reference and store value
		this.register[reg1][1] = this.memory[this.register[reg2][1]];
		// Update Variable Array
		for(var i = 0; i < this.variables.length; i++){
			if(this.variables[i][0] == this.register[reg1][0]){
				this.variables[i][1] = this.register[reg1][1];
			}
		}
	};

	// Compares two registers and sets flags accordingly
	this.compare = function(reg1, reg2){
	//I do things!
	};

	// Observes flags set by Compare and adjusts program counter accordingly
	this.branch = function(cond, address){
	//I do things!
	};
	
	// Sets program counter to be equal to the given memory address
	this.jump = function(addr1, add2){
		//I do things!
	};
	// Sets the stop flag to true.
	// Essentially tells the program to stop.
	// Also resets the program counter.
	this.halt = function() {
		this.stop = true;
		this.programCounter = this.startCounter;
	};
	
	// Evaluates the command at the given line.
	// Essentially the core interpreter of the program
	// Changes RegN values into index numbers
	this.eval = function(line){
		switch(this.memory[line][0]){
			case 0:  // 0000b LoadImm
				this.loadImm(this.memory[line][1],this.memory[line][2],this.memory[line][3]);
				this.programCounter++;
				break;
			case 1:  // 0001b Load
				this.load(this.memory[line][1],this.memory[line][2],this.memory[line][3]);
				this.programCounter++;
				break;
			case 2:  // 0010b Store
				this.store(this.memory[line][1],this.memory[line][2],this.memory[line][3]);
				this.programCounter++;
				break;
			case 3:  // 0011b LoadInd
				this.loadInd(this.memory[line][1],this.memory[line][2]);
				this.programCounter++;
				break;
			case 4:  // 0100b StoreInd
				this.storeInd(this.memory[line][1],this.memory[line][2]);
				this.programCounter++;
				break;
			case 5:  // 0101b Add
				this.add(this.memory[line][1],this.memory[line][2],this.memory[line][3]);
				this.programCounter++;
				break;	
			case 6:  // 0110b Subtract
				this.sub(this.memory[line][1],this.memory[line][2],this.memory[line][3]);
				this.programCounter++;
				break;
			case 7:  // 0111b And
				this.and(this.memory[line][1],this.memory[line][2],this.memory[line][3]);
				this.programCounter++;
				break;
			case 8:  // 1000b Or
				this.or(this.memory[line][1],this.memory[line][2],this.memory[line][3]);
				this.programCounter++;
				break;
			case 9:  // 1001b Not
				this.not(this.memory[line][1],this.memory[line][2],this.memory[line][3]);
				this.programCounter++;
				break;	
			case 10: // 1010b ASL
				this.asl(this.memeory[line][1],this.memory[line][2],this.memory[line][3]);
				this.programCounter++;
				break;
			case 11: // 1011b ASR
				this.asr(this.memory[line][1],this.memory[line][2],this.memory[line][3]);
				this.programCounter++;
				break;
			case 12: // 1100b Compare
				this.compare(this.memory[line][2],this.memory[line][3]);
				this.programCounter++;
				break;
			case 13: // 1101b Branch
				this.branch(this.memory[line][1],this.memory[line][2],this.memory[line][3]);
				break;
			case 14: // 1110b Jump
				this.jump(this.memory[line][2],this.memory[line][3]);
				break;
			case 15: // 1111b Halt
				this.halt();
				break;	
		}
	};
	
	
	// Runs through the program
	// First checks if the code has recently been edited.
	this.run= function() {
		if(this.edited) {
			this.init();
		}
		while(!this.stop){
			console.log(this.programCounter);
			this.eval(this.programCounter);
			// Find way to pause execution
		}
		this.stop = false;
		console.log(this.variables.toString());
		// Need to find some way of restoring to original state once complete
		// Either through init or resetting edited flag to false
	};
	// Walks through one step of the program
	this.walk = function() {
		if(this.edited) {
			this.init();
		} 
		if(!this.stop) {
			console.log(this.programCounter);
			this.eval(this.programCounter);
		} else {
			this.stop = true;
		}
		
	};
	};
