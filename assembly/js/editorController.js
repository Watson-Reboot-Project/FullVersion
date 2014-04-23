/***
 * 	Editor Controller for Watson Assembly Lab
 *  Author Richard Waller 2014
 *  
 *  This file contains most of the functions needed for inserting and deleting code in the Watson Assembly Editor,
 *  as well as the control structure for the popups needed to populate the program with data.
 ***/
			var len = 0;
			var memPointer = 0;
			var clickedCell;
			var clickedCellNum;
			var deleteFlag = false;
			var registers = ["REG0", "REG1", "REG2", "REG3",
					"REG4", "REG5", "REG6", "REG7",
					"REG8", "REG9", "REGA", "REGB", 
					"REGC", "REGD", "REGE", "REGF"];
			var conditions = ["EQ", "NE", "LT", "LE", "GT", "GE", "CARRY", "NEG", "ZERO", "OVER"];
			var labels = [];
			var editor1 = new Editor("Editor1", true, true, 1, 50, true);
			var editorDiv = document.getElementById("wrapper");
			var deleteCell;
			var edited;

			function word(){
				editor1.addRow(memPointer,
						[{text:"&lt;label&gt;", type:"label1"},
						{text:".WORD", type:"keyword"},
						{text:"&lt;const&gt;", type:"constant const1"}]);
				memPointer++;
				edited = true;
			}
			
			function block(){
				editor1.addRow(memPointer,
						[{text:"&lt;label&gt;", type:"label1"},
						{text:".BLOCK", type:"keyword"},
						{text:"&lt;const&gt;", type:"constant const1"}]);
				memPointer++;
				edited = true;
			}
			
			function loadIMM(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"LOADIMM", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;const&gt;", type:"constant const2"}]);
				edited = true;
			}
			
			function load(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"LOAD", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;label&gt;", type:"label2"}]);
				edited = true;
			}
			
			function store(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"STORE", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;label&gt;", type:"label2"}]);
				edited = true;
			}
			
			function loadIND(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"LOADIND", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;", type:"reg2"}]);
				edited = true;
			}
			
			function storeIND(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"STOREIND", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;", type:"reg2"}]);
				edited = true;
			}
			
			function add(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"ADD", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;", type:"reg2"}]);
				edited = true;
			}
			
			function subtract(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"SUBTRACT", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;", type:"reg2"}]);
				edited = true;
			}
			
			function and(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"AND", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;", type:"reg2"}]);
				edited = true;
			}
			
			function or(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"OR", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;", type:"reg2"}]);
				edited = true;
			}
			
			function not(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"NOT", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;", type:"reg2"}]);
				edited = true;
			}
			
			function asl(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"ASL", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;bits&gt;", type:"constant bits"}]);
				edited = true;
			}
			
			function asr(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"ASR", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;bits&gt;", type:"constant bits"}]);
				edited = true;
			}
			
			function compare(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"COMPARE", type:"command"},
						{text:"&lt;reg&gt;,", type:"reg1"},
						{text:"&lt;reg&gt;", type:"reg2"}]);
				edited = true;
			}
			
			function branch(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"BRANCH", type:"command"},
						{text:"&lt;cond&gt;,", type:"cond"},
						{text:"&lt;label&gt;"}]);
				edited = true;
			}
			
			function jump(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"JUMP", type:"command"},
						{text:"&lt;label&gt;", type:"label2"}]);
				edited = true;
			}
			
			function halt(){
				editor1.addRow(editor1.getSelectedRowIndex(),
						[{text:"&nbsp;", type:"label1"},
						{text:"HALT", type:"command"}]);
				edited = true;
			}
			
			
			editor1.setCellClickListener(function(event){
				console.log('from index, editor1: cell click');
				console.log('\t' + $(this).attr('class'));
				
				if($(this).hasClass("insert")){
					if($(this).css('cursor', 'pointer')) {
						if($(this).parent().index() >= memPointer-1){
							editor1.selectRowByIndex($(this).parent().index());
						}
					}
				}
				else if($(this).hasClass("lineNum")){
					console.log($(this).parent().parent().parent().parent().parent().index());
					console.log("Pre-Deletion memPointer = "+memPointer);
					deleteCell = $(this).parent().parent().parent().parent().parent().index();
					createAlertBox("Delete", "Delete this line?", false, fDelete, editorDiv);
				}
				else{
					// Woo! We can use this section later! :D
					var cellVal = $(this).text();					// grab the cell value of clicked cell
					var cellNum = $(this).index();					// grab the cell number of clicked cell
					var rowNum = ($(this).parent().parent().parent().parent().parent().index());	// grab row number in codeTable of clicked cell
					clickedCell = $(this);
		            clickedCellNum = cellNum;
		            
		            if($(this).hasClass("bits"))
		            {
		            	console.log("Hey, this one has bits!");
		            	createNumBitsPad(0, 15, "Shift how many bits?", "Enter a number between 0 and 15", false, 10, fReturn, editorDiv);
		            }
		            else if($(this).hasClass("const1"))
		            {
		            	console.log("This one should have a big constant.");
		            	createConstNumPad(-32768, 32767, "What's stored here?", "Enter a number between -32,768 and 32,767", false, 10, fReturn, editorDiv);
		            }
		            else if($(this).hasClass("const2"))
		            {
		            	console.log("This one should have a small constant.");
		            	createConstNumPad(0, 255, "What value?", "Enter a number between 0 and 255", false, 10, fReturn, editorDiv);
		            }
		            else if($(this).hasClass("label1"))
		            {
		            	console.log("This one will be using the label-maker.");
		            	createLabelMaker("Create a label", "", fLabel, editorDiv);
		            }
		            else if($(this).hasClass("label2"))
		            {
		            	console.log("This one will be selecting from the labels");
		            	createLabelSelector("Use which label?", labels, fReturn, editorDiv);
		            }
		            else if($(this).hasClass("reg1"))
		            {
		            	console.log("This one will select from the registers");
		            	createRegSelector("Select a register", registers, fRegisterC, editorDiv);
		            }
		            else if($(this).hasClass("reg2"))
		            {
		            	console.log("This one will select from the registers");
		            	createRegSelector("Select a register", registers, fRegister, editorDiv);
		            }
		            else if($(this).hasClass("cond"))
		            {
		            	console.log("This is a conditional thing...");
		            	createCondSelector("What conditions?", conditions, fReturnC, editorDiv);
		            } else {
		            	console.log("Hey! That doesn't do anything, silly!");
		            }
					
					//alert("from editor1: " + $(this).html());
				}
					
				return false;
			});
			
			editor1.setInsertBarMouseEnterListener(function(event){
				//console.log('from index, editor1: mouseEnter');
				//console.log('\t' + $(this).attr('class'));
				editor1.moveInsertionBarCursor($(this).parent().index());
				
				return false;
			});
			
			/* Selector for the available <label>'s */
		    function createLabelSelector(title, optionS, callback) {
		        var newSel = new Selector();
		        newSel.open(title, optionS, callback);
		    }
		    
		    /* Selector for the <reg>, and <reg>'s */
		    function createRegSelector(title, optionS, callback) {
		        var newSel = new Selector();
		        newSel.open(title, optionS, callback);
		    }
		    
		    /* Selector for the <cond>, elements */
		    function createCondSelector(title, optionS, callback) {
		        var newSel = new Selector();
		        newSel.open(title, optionS, callback);
		    }
		    
		    /* String Pad for <label> elements on the left of the program */
		    function createLabelMaker(title, instructions, callback) {
		        var newStrP = new StringPad();
		        newStrP.open(title, instructions, callback);
		    }
		    
		    /* Number Pad for the <bits> element */
		    function createNumBitsPad(minValue, maxValue, titleStr, instructions, decimalAllowed, base, callback) {
				var newNumpad = new NumberPad();
				newNumpad.open(minValue, maxValue, titleStr, instructions, decimalAllowed, base, callback);
		    }
		    
		    /* Number Pad for the <const> element */
		    function createConstNumPad(minValue, maxValue, titleStr, instructions, decimalAllowed, base, callback) {
				var newNumpad = new NumberPad();
				newNumpad.open(minValue, maxValue, titleStr, instructions, decimalAllowed, base, callback);
		    }

		    /* Requisite Alert Box */
		    function createAlertBox(title, msg, bool, callback) {
		        var alert = new Alert();
		        alert.open(title, msg, bool, callback);
		    }
		    
		    function fReturn(result) {
		        //Function that is called when selecting a function that replaces the text of a single cell
		    	if(result != null){
		    		clickedCell.text(result);
		    		edited = true;
		    	}
		    }
		    
		    function fDelete(result) {
		    	deleteFlag = result;
		    	if(deleteFlag){
					if($(this).parent().parent().parent().parent().parent().index() <= memPointer){
						memPointer--;
					}
					editor1.deleteRow(deleteCell);
					console.log("Post-Deletion memPointer = "+memPointer);
					edited = true;
				}
		    }
		    
		    function fReturnC(result) {
		    	//Function that returns results padded with a comma ','
		    	if(result != null){
		    		clickedCell.text(result + ',');
		    		edited = true;
		    	}
		    }
		    
		    function fRegister(result) {
		    	//Function that stores the simple register
		    	if(result != null) {
		    		clickedCell.text(result);
		    		edited = true;
		    	}
		    }
		    
		    function fRegisterC(result) {
		    	//Function that stores the register and a comma
		    	if(result != null) {
		    		clickedCell.text(result + ',');
		    		edited = true;
		    	}
		    }
		    
		    function fLabel(result) {
		    	// Function that is called when creating a new label
		    	if(result != null){
		    		clickedCell.text(result);
		    		clickedCell.css("color","black");
		    		labels.push(result);
		    		edited = true;
		    	}
		    }
// vim: ts=4 sw=4 noet nolist
