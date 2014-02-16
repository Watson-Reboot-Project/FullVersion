/**
 * 
 */
		function insertWord() {
			//insert to backend memory here
			var row = document.createElement("tr");
			var cell = document.createElement("td");
			var label = document.createTextNode("<label>");
			cell.appendChild(label);
			row.appendChild(cell);
			var cell2 = document.createElement("td");
			var cellText = document.createTextNode(".Word");
			cell2.appendChild(cellText);
			row.appendChild(cell2);
			var cell3 = document.createElement("td");
			cellText = document.createTextNode("<const>");
			cell3.appendChild(cellText);
			row.appendChild(cell3);
			document.getElementById("commands").appendChild(row);
			//update program counter +1
		}
		function insertBlock() {
			//insert to backend memory here
			var row = document.createElement("tr");
			var cell = document.createElement("td");
			var label = document.createTextNode("<label>");
			cell.appendChild(label);
			row.appendChild(cell);
			var cell2 = document.createElement("td");
			var cellText = document.createTextNode(".Block");
			cell2.appendChild(cellText);
			row.appendChild(cell2);
			var cell3 = document.createElement("td");
			cellText = document.createTextNode("<num>");
			cell3.appendChild(cellText);
			row.appendChild(cell3);
			document.getElementById("commands").appendChild(row);
			//update program counter +blocksize (in edit field)
		}
		function insertHalt() {
			//insert to backend memory here
			var row =  document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("Halt");
			cell.appendChild(cellText);
			row.appendChild(cell);
			document.getElementById("commands").appendChild(row);
		}
		function insertLoad() {
			//insert to backend memory here
			var row =  document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("Load");
			cell.appendChild(cellText);
			row.appendChild(cell);
			var cell2 = document.createElement("td");
			var cellText2 = document.createTextNode("<reg>");
			cell2.appendChild(cellText2);
			row.appendChild(cell2);
			var cell3 = document.createElement("td");
			var cellText3 = document.createTextNode("<label>");
			cell3.appendChild(cellText3);
			row.appendChild(cell3);
			document.getElementById("commands").appendChild(row);
		}
		function insertLoadImm() {
			//insert to backend memory here
			var row =  document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("LoadImm");
			cell.appendChild(cellText);
			row.appendChild(cell);
			var cell2 = document.createElement("td");
			var cellText2 = document.createTextNode("<reg>");
			cell2.appendChild(cellText2);
			row.appendChild(cell2);
			var cell3 = document.createElement("td");
			var cellText3 = document.createTextNode("<const>");
			cell3.appendChild(cellText3);
			row.appendChild(cell3);
			document.getElementById("commands").appendChild(row);
		}
		function insertLoadInd() {
			//insert to backend memory here
			var row =  document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("LoadInd");
			cell.appendChild(cellText);
			row.appendChild(cell);
			var cell2 = document.createElement("td");
			var cellText2 = document.createTextNode("<reg>");
			cell2.appendChild(cellText2);
			row.appendChild(cell2);
			var cell3 = document.createElement("td");
			var cellText3 = document.createTextNode("<reg>");
			cell3.appendChild(cellText3);
			row.appendChild(cell3);
			document.getElementById("commands").appendChild(row);
		}
		function insertStore() {
			//insert to backend memory here
			var row =  document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("Store");
			cell.appendChild(cellText);
			row.appendChild(cell);
			var cell2 = document.createElement("td");
			var cellText2 = document.createTextNode("<reg>");
			cell2.appendChild(cellText2);
			row.appendChild(cell2);
			var cell3 = document.createElement("td");
			var cellText3 = document.createTextNode("<label>");
			cell3.appendChild(cellText3);
			row.appendChild(cell3);
			document.getElementById("commands").appendChild(row);
		}
		function insertStoreInd() {
			//insert to backend memory here
			var row =  document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("StoreInd");
			cell.appendChild(cellText);
			row.appendChild(cell);
			var cell2 = document.createElement("td");
			var cellText2 = document.createTextNode("<reg>");
			cell2.appendChild(cellText2);
			row.appendChild(cell2);
			var cell3 = document.createElement("td");
			var cellText3 = document.createTextNode("<reg>");
			cell3.appendChild(cellText3);
			row.appendChild(cell3);
			document.getElementById("commands").appendChild(row);
		}
		function insertAnd() {
			var row = document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("And");
			cell.appendChild(cellText);
			row.appendChild(cell);
			for (var i = 0; i < 3; i++) {
				var cell2 = document.createElement("td");
				cellText = document.createTextNode("<reg>");
				cell2.appendChild(cellText);
				row.appendChild(cell2);
			}
			document.getElementById("commands").appendChild(row);
		}
		function insertAdd() {
			//insert into backend memory here
			var row = document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("Add");
			cell.appendChild(cellText);
			row.appendChild(cell);
			for (var i = 0; i < 3; i++) {
				var cell2 = document.createElement("td");
				cellText = document.createTextNode("<reg>");
				cell2.appendChild(cellText);
				row.appendChild(cell2);
			}
			document.getElementById("commands").appendChild(row);
		}
		function insertSub() {
			//insert into backend memory here
			var row = document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("Sub");
			cell.appendChild(cellText);
			row.appendChild(cell);
			for (var i = 0; i < 3; i++) {
				var cell2 = document.createElement("td");
				cellText = document.createTextNode("<reg>");
				cell2.appendChild(cellText);
				row.appendChild(cell2);
			}
			document.getElementById("commands").appendChild(row);
		}
		function insertOr() {
			//insert to backend memory here
			var row = document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("Or");
			cell.appendChild(cellText);
			row.appendChild(cell);
			for (var i = 0; i < 3; i++) {
				var cell2 = document.createElement("td");
				cellText = document.createTextNode("<reg>");
				cell2.appendChild(cellText);
				row.appendChild(cell2);
			}
			document.getElementById("commands").appendChild(row);
		}
		function insertASL() {
			//insert to backend memory here
			var row = document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("ASL");
			cell.appendChild(cellText);
			row.appendChild(cell);
			for (var i = 0; i < 2; i++) {
				var cell2 = document.createElement("td");
				cellText = document.createTextNode("<reg>");
				cell2.appendChild(cellText);
				row.appendChild(cell2);
			}
			var cell3 = document.createElement("td");
			var cellText3 = document.createTextNode("<bits>");
			cell3.appendChild(cellText3);
			row.appendChild(cell3);
			document.getElementById("commands").appendChild(row);
		}
		function insertASR() {
			//insert to backend memory here
			var row = document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("ASR");
			cell.appendChild(cellText);
			row.appendChild(cell);
			for (var i = 0; i < 2; i++) {
				var cell2 = document.createElement("td");
				cellText = document.createTextNode("<reg>");
				cell2.appendChild(cellText);
				row.appendChild(cell2);
			}
			var cell3 = document.createElement("td");
			var cellText3 = document.createTextNode("<bits>");
			cell3.appendChild(cellText3);
			row.appendChild(cell3);
			document.getElementById("commands").appendChild(row);
		}
		function insertNot() {
			//insert to backend memory here
			var row = document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("Not");
			cell.appendChild(cellText);
			row.appendChild(cell);
			for (var i = 0; i < 2; i++) {
				var cell2 = document.createElement("td");
				cellText = document.createTextNode("<reg>");
				cell2.appendChild(cellText);
				row.appendChild(cell2);
			}
			document.getElementById("commands").appendChild(row);
		}
		function insertCompare() {
			//insert to backend memory here
			var row = document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("Compare");
			cell.appendChild(cellText);
			row.appendChild(cell);
			for (var i = 0; i < 2; i++) {
				var cell2 = document.createElement("td");
				cellText = document.createTextNode("<reg>");
				cell2.appendChild(cellText);
				row.appendChild(cell2);
			}
			document.getElementById("commands").appendChild(row);
		}
		function insertBranch() {
			//insert to backend memory here
			var row =  document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("Branch");
			cell.appendChild(cellText);
			row.appendChild(cell);
			var cell2 = document.createElement("td");
			var cellText2 = document.createTextNode("<cond>");
			cell2.appendChild(cellText2);
			row.appendChild(cell2);
			var cell3 = document.createElement("td");
			var cellText3 = document.createTextNode("<address>");
			cell3.appendChild(cellText3);
			row.appendChild(cell3);
			document.getElementById("commands").appendChild(row);
		}
		function insertJump() {
			//insert to backend memory here
			var row =  document.createElement("tr");
			var blank = document.createElement("td");
			var blankText = document.createTextNode("");
			blank.appendChild(blankText);
			row.appendChild(blank);
			var cell = document.createElement("td");
			var cellText = document.createTextNode("Jump");
			cell.appendChild(cellText);
			row.appendChild(cell);
			var cell2 = document.createElement("td");
			var cellText2 = document.createTextNode("<address>");
			cell2.appendChild(cellText2);
			row.appendChild(cell2);
			document.getElementById("commands").appendChild(row);
		}