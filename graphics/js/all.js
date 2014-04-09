function setup (container, drawContainer, drawCanvas, runWalkDiv, runName, walkName, variableContainer, varWindow, programContainer, programCode, figureNumber) {

/*
 * This file contains all code for the functions which control what
 * is drawn on the interactive drawing window. It also handles adding
 * the variables that are created to the appropriate arrays.
 */

//Declare all variables
var toDraw = new Array();
var canvas = document.getElementById(drawCanvas); //Drawing window canvas
var paintbrush = 0; //Keeps track of which function was called last. (prevents multiple shapes from being drawn at once)
var color = "red";

//Event listener for cursor position on canvas
$("#" + drawCanvas).mousemove(function(evt) {
    var cursorPos = getCursorPos(canvas, evt);
    var message = Math.floor(cursorPos.x) + " x " + Math.floor(cursorPos.y);
    if (isNaN(cursorPos.x) || cursorPos.x > 300 || cursorPos.x < 0 || cursorPos.y > 300 || cursorPos.y < 0)
        message = "";
    writeMessage(canvas, message);
});

//Event listener for when cursor leaves drawing window
canvas.addEventListener('mouseout', function(evt) {
	clear();
	draw();
}, false);

//Clears the canvas of all drawings
function clear() {
	var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Draws all saved objects onto the canvas
function draw() {
	for (var i = 0; i < toDraw.length; i++) {
		if (toDraw[i].type == 'point') {
			//This is a point
			var ctx = canvas.getContext('2d');
			ctx.fillStyle = color;
			ctx.fillRect(toDraw[i].startX-2, toDraw[i].startY-2, 2, 2);
		}
		else if (toDraw[i].type == 'line' || toDraw[i].type == 'temp') {
			//This is a line
			var ctx = canvas.getContext('2d');
			ctx.beginPath();
			ctx.moveTo(toDraw[i].startX, toDraw[i].startY);
			ctx.lineTo(toDraw[i].endX, toDraw[i].endY);
			ctx.strokeStyle = color;
			ctx.stroke();
		}
		else if (toDraw[i].type == 'circle') {
			//This is a circle
			var ctx = canvas.getContext('2d');
			ctx.beginPath();
			ctx.arc(toDraw[i].startX, toDraw[i].startY, toDraw[i].diameter, 0, 2*Math.PI);
			ctx.strokeStyle = color;
			ctx.stroke();
		}
		else if (toDraw[i].type == 'polygon') {
			//This is a polygon
			for (var n = 0; n < toDraw[i].angles.length; n++) {
				var ctx = canvas.getContext('2d');
				ctx.beginPath();
				ctx.moveTo(toDraw[i].angles[n].startX, toDraw[i].angles[n].startY);
				ctx.lineTo(toDraw[i].angles[n].endX, toDraw[i].angles[n].endY);
				ctx.strokeStyle = color;
				ctx.stroke();
			}
		}
	}
}

//Finds distance between two points on canvas
function findDistance(startX, startY, endX, endY) {
	var distance = Math.sqrt(Math.pow((endX - startX), 2) + Math.pow((endY - startY), 2));
	return distance;
}

//Writes cursor position on canvas
function writeMessage(canvas, message) {
	clear();
	draw();
	var ctx = canvas.getContext('2d');
	ctx.textAlign = 'right';
    ctx.font = '8pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(message, 298, 10);
}

//Returns the cursor position on canvas
function getCursorPos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: 300 - (evt.clientY - rect.top)
    };
}

//Allows user to draw a point on canvas. Saves point in toDraw array
function drawPoint() {
	paintbrush++;
	var curr = paintbrush;
	var click = 0;
	var startX;
	var startY;
	var rect = canvas.getBoundingClientRect();
	pointVariables[pointVariables.length] = 'p' + (pointVariables.length+1);
	printVars();
	
	
	canvas.addEventListener('click', function(evt) {
		if (curr < paintbrush) { //Checks to see if another button has been pushed
			this.removeEventListener('click',arguments.callee,false);
			return;
		}
		click++;
		if (click == 1) {
			startX = evt.clientX - rect.left;
			startY = evt.clientY - rect.top;
			toDraw[toDraw.length] = new makePoint(startX, startY);
			writeCode(); //TEST CODE! DELETE THIS!!
		}
		
		//remove listener after the line has been drawn
		if (click > 0) {
			this.removeEventListener('click',arguments.callee,false);
		}
	}, false);
}

//Allows user to draw a line on canvas. Saves line in toDraw array
function drawLine() {
	paintbrush++;
	var curr = paintbrush;
	var click = 0;
	var startX;
	var startY;
	var endX;
	var endY;
	var rect = canvas.getBoundingClientRect();
	lineVariables[lineVariables.length] = 'l' + (lineVariables.length+1);
	printVars();
	
	canvas.addEventListener('click', function(evt) {
		if (curr < paintbrush) { //Checks to see if another button has been pushed
			this.removeEventListener('click',arguments.callee,false);
			return;
		}
		click++;
		if (click == 1) {
			startX = evt.clientX - rect.left;
			startY = evt.clientY - rect.top;
			
			//visualize what the line will look like as the user moves the cursor around
			canvas.addEventListener('mousemove', function(evt) {
				if (curr < paintbrush) { //Checks to see if another button has been pushed
					this.removeEventListener('mousemove',arguments.callee,false);
					return;
				}
				var ctx = canvas.getContext('2d');
				ctx.beginPath();
				ctx.moveTo(startX, startY);
				ctx.lineTo(evt.clientX - rect.left, evt.clientY - rect.top);
				ctx.strokeStyle = color;
				ctx.stroke();
				if (click > 1)
					this.removeEventListener('mousemove',arguments.callee,false);
			}, false);
		}
		else if (click == 2) {
			endX = evt.clientX - rect.left;
			endY = evt.clientY - rect.top;
			toDraw[toDraw.length] = new makeLine(startX, startY, endX, endY, "line");
			writeCode(); //TEST CODE! DELETE THIS!
		}
		
		//remove listener after the line has been drawn
		if (click > 1) {
			this.removeEventListener('click',arguments.callee,false);
		}
	}, false);
}

//Allows user to draw a circle on canvas. Saves circle in toDraw array
function drawCircle() {
	paintbrush++;
	var curr = paintbrush;
	var click = 0;
	var startX;
	var startY;
	var endX;
	var endY;
	var rect = canvas.getBoundingClientRect();
	circleVariables[circleVariables.length] = 'c' + (circleVariables.length+1);
	printVars();
	
	canvas.addEventListener('click', function(evt) {
		if (curr < paintbrush) { //Checks to see if another button has been pushed
			this.removeEventListener('click',arguments.callee,false);
			return;
		}
		click++;
		if (click == 1) {
			startX = evt.clientX - rect.left;
			startY = evt.clientY - rect.top;
			
			//visualize what the circle will look like as the user moves the cursor around
			canvas.addEventListener('mousemove', function(evt) {
				if (curr < paintbrush) { //Checks to see if another button has been pushed
					this.removeEventListener('mousmove',arguments.callee,false);
					return;
				}
				var ctx = canvas.getContext('2d');
				ctx.beginPath();
				ctx.arc(startX, startY, findDistance(startX, startY, evt.clientX-rect.left, evt.clientY - rect.top), 0, 2*Math.PI);
				ctx.strokeStyle = color;
				ctx.stroke();
				if (click > 1)
					this.removeEventListener('mousemove',arguments.callee,false);
			}, false);
		}
		else if (click == 2) {
			endX = evt.clientX - rect.left;
			endY = evt.clientY - rect.top;
			toDraw[toDraw.length] = new makeCircle(startX, startY, Math.round(findDistance(startX, startY, endX, endY)));
			writeCode(); //TEST CODE! DELETE THIS!
		}
		
		//remove listener after the circle has been drawn
		if (click > 1) {
			this.removeEventListener('click',arguments.callee,false);
		}
	}, false);
}

//Allows user to draw a polygon on canvas. Saves polygon in toDraw array
function drawPolygon() {
	paintbrush++; 
	var curr = paintbrush;
	var click = 0;
	var startX;
	var startY;
	var endX;
	var endY;
	var coor = new Array();
	var rect = canvas.getBoundingClientRect();
	polygonVariables[polygonVariables.length] = 'g' + (polygonVariables.length+1);
	printVars();
	
	//defines a point (or angle) on the polygon
	function point(startX, startY, endX, endY) {
		this.startX = startX;
		this.startY = startY;
		this.endX = endX;
		this.endY = endY;
	}
	
	canvas.addEventListener('click', function(evt) { //Listens for click on canvas
		if (curr < paintbrush) { //Checks to see if another button has been pushed
			this.removeEventListener('click',arguments.callee,false);
			return;
		}
		click++;
		if (click % 2 == 1) {
			if (click > 1) {
				startX = endX;
				startY = endY;
			}
			else {
				startX = evt.clientX - rect.left;
				startY = evt.clientY - rect.top;
			}
			
			//visualize what the line will look like as the user moves the cursor around
			canvas.addEventListener('mousemove', function(evt) {
				if (curr < paintbrush) { //Checks to see if another button has been pushed
					this.removeEventListener('mousemove',arguments.callee,false);
					
					var x = 0;
					for (var i = 0; i < toDraw.length; i++) {
						if (toDraw[i].type == 'temp')
							x++;
					}
					toDraw = toDraw.slice(0, toDraw.length-x);
					
					return;
				}
				var ctx = canvas.getContext('2d');
				ctx.beginPath();
				ctx.moveTo(startX, startY);
				//Snap into place if preview line is within 8 pixels of starting point
				if (click > 2) {
					if (findDistance(evt.clientX - rect.left, evt.clientY - rect.top, coor[0].startX, coor[0].startY) < 8)
						ctx.lineTo(coor[0].startX, coor[0].startY);
					else
						ctx.lineTo(evt.clientX - rect.left, evt.clientY - rect.top);
				}
				else
					ctx.lineTo(evt.clientX - rect.left, evt.clientY - rect.top);
				ctx.strokeStyle = color;
				ctx.stroke();
				if (click % 2 == 0) //if click is finishing a preview line then we need to remove the listener
					this.removeEventListener('mousemove',arguments.callee,false);
			}, false);
		}
		else {
			endX = evt.clientX - rect.left;
			endY = evt.clientY - rect.top;
			if (click > 2) {
				if (findDistance(endX, endY, coor[0].startX, coor[0].startY) < 8) {
					this.removeEventListener('click',arguments.callee,false);
					toDraw[toDraw.length] = new makeLine(startX, startY, coor[0].startX, coor[0].startY, "temp"); //Set this line to temporary because it's merely a preview
					coor[coor.length] = new point(startX, startY, coor[0].startX, coor[0].startY);
					
					//Erase all line elements in toDraw that were used for polygon. Save polygon.
					toDraw = toDraw.slice(0, toDraw.length-coor.length);
					toDraw[toDraw.length] = new makePolygon(coor);
					writeCode(); //TEST CODE! DELETE THIS!
				}
				else {
					toDraw[toDraw.length] = new makeLine(startX, startY, endX, endY, "temp"); //Set this line to temporary because it's merely a preview
					coor[coor.length] = new point(startX, startY, endX, endY);
					canvas.click();
				}
			}
			else {
				toDraw[toDraw.length] = new makeLine(startX, startY, endX, endY, "temp"); //Set this line to temporary because it's merely a preview
				coor[coor.length] = new point(startX, startY, endX, endY);
				canvas.click();
			}
		}
	}, false);
}







/*
 *
 *  Contains code for Program Code window.
 * 
 */

//Declare all variables
var code = document.getElementById(programCode);
var codeSep = 0; //Used for naming div elements that separate code lines
var codeText = new Array();

//Point object
function makePoint(startX, startY) {
	this.startX = startX;
	this.startY = startY;
	this.type = 'point';
	this.varNum = pointVariables.length; //Index of this object in pointVariables
	this.drawNum = toDraw.length; //Index of this object in toDraw
	this.active = true; //Boolean to control if shape needs to be drawn or not
	this.assigned = true; //Boolean to control whether variable has been assigned or not
	this.varPoints = makeLink("delete1" + this.drawNum, whiteSpace(3) + "* ") +
		makeLink("pclick" + this.drawNum, "p" + this.varNum) + 
		" = (" + makeLink("aclick" + this.drawNum, this.startX) + "," + 
		makeLink("bclick" + this.drawNum, 300-this.startY) + ")" + codeSeparator(this.drawNum);
	this.drawLink = makeLink("delete2" + this.drawNum, whiteSpace(3) + "* ") +
		"draw(" + makeLink("draw" + this.drawNum, "p" + this.varNum) + ")" + codeSeparator(this.drawNum);
	//codeText[codeText.length] = new codeElement(this.varPoints, true, this.drawNum);
	//codeText[codeText.length] = new codeElement(this.drawLink, true, this.drawNum);
}
//Line object
function makeLine(startX, startY, endX, endY, type) {
	this.startX = startX;
	this.startY = startY;
	this.endX = endX;
	this.endY = endY;
	this.type = type;
	this.varNum = lineVariables.length; //Index of this object in lineVariables
	this.drawNum = toDraw.length; //Index of this object in toDraw
	this.active = true; //Boolean to control if shape needs to be drawn or not
	this.assigned = true; //Boolean to control whether variable has been assigned or not
	this.varPoints = makeLink("deleteVar" + this.drawNum, whiteSpace(3) + "* ") +
		makeLink("lclick" + this.drawNum, "l" + this.varNum) +
		" = ((" + makeLink("startX" + this.drawNum, this.startX) + "," +
		makeLink("startY" + this.drawNum, 300-this.startY) + "),(" +
		makeLink("endX" + this.drawNum, this.endX) + "," +
		makeLink("endY" + this.drawNum, 300-this.endY) + "))" + codeSeparator(this.drawNum);
	this.drawLink = makeLink("deleteDraw" + this.drawNum, whiteSpace(3) + "* ") +
		"draw(" + makeLink("draw" + this.drawNum, "l" + this.varNum) + ")" + codeSeparator(this.drawNum);
	//codeText[codeText.length] = new codeElement(this.varPoints, true, this.drawNum);
    //codeText[codeText.length] = new codeElement(this.drawLink, true, this.drawNum); 
}
//Circle object
function makeCircle(startX, startY, diameter) {
	this.startX = startX;
	this.startY = startY;
	this.diameter = diameter;
	this.type = 'circle';
	this.varNum = circleVariables.length;
	this.drawNum = toDraw.length;
	this.active = true;
	this.assigned = true;
	this.varPoints = makeLink("deleteVar" + this.drawNum, whiteSpace(3) + "* ") +
		makeLink("cclick" + this.drawNum, "c" + this.varNum) +
		" = ((" + makeLink("startX" + this.drawNum, this.startX) + "," +
		makeLink("startY" + this.drawNum, 300-this.startY) + ")," +
		makeLink("radius" + this.drawNum, this.diameter) + ")" + codeSeparator(this.drawNum);
	this.drawLink = makeLink("deleteDraw" + this.drawNum, whiteSpace(3) + "* ") +
		"draw(" + makeLink("draw" + this.drawNum, "c" + this.varNum) + ")" + codeSeparator(this.drawNum);
	//codeText[codeText.length] = new codeElement(this.varPoints, true, this.drawNum);
    //codeText[codeText.length] = new codeElement(this.drawLink, true, this.drawNum);
}
//Polygon object
function makePolygon(angles) {
	this.angles = angles;
	this.type = 'polygon';
	this.varNum = polygonVariables.length;
	this.drawNum = toDraw.length;
	this.active = true;
	this.assigned = true;
	this.varPoints = makeLink("deleteVar" + this.drawNum, whiteSpace(3) + "* ") +
		makeLink("gclick" + this.drawNum, "g" + this.varNum) +
		" = (" + codeSeparator(this.drawNum);
		for (var i = 0; i < angles.length; i++) {
			this.varPoints += makeLink("deletePoint" + i, whiteSpace(3) + "*") + whiteSpace(10) + 
			"(" + makeLink("startgX" + i, angles[i].startX) + "," +
			makeLink("startgY" + i, 300-angles[i].startY) + ")," + codeSeparator(this.drawNum);
		}
		this.varPoints += whiteSpace(11) + ")" + codeSeparator(this.drawNum);
	this.drawLink = makeLink("deleteDraw" + this.drawNum, whiteSpace(3) + "* ") +
		"draw(" + makeLink("draw" + this.drawNum, "g" + this.varNum) + ")" + codeSeparator(this.drawNum);
	//codeText[codeText.length] = new codeElement(this.varPoints, true, this.drawNum);
   //codeText[codeText.length] = new codeElement(this.drawLink, true, this.drawNum);
}

//writes the code in the code window using toDraw array
function writeCode() {
	var string = "";
	
	/*
	//Write HTML in program code window
	for (var i = 0; i < toDraw.length; i++) {
		if (toDraw[i].type == "point") { //Element is point object
			if (toDraw[i].assigned)
				string += toDraw[i].varPoints;
			if (toDraw[i].active)
				string += toDraw[i].drawLink;
		}
		else if (toDraw[i].type == "line") {
			if (toDraw[i].assigned)
				string += toDraw[i].varPoints;
			if (toDraw[i].active)
				string += toDraw[i].drawLink;
		}
		else if (toDraw[i].type == "circle") {
			if (toDraw[i].assigned)
				string += toDraw[i].varPoints;
			if (toDraw[i].active)
				string += toDraw[i].drawLink;
		}
		else if (toDraw[i].type == "polygon") {
			if (toDraw[i].assigned)
				string += toDraw[i].varPoints;
			if (toDraw[i].active)
				string += toDraw[i].drawLink;
		}
	}*/
	$("#" + programCode).empty();
	for (var i = 0; i < codeText.length; i++) {
	    //string += codeText[i].text;
	    $("#" + programCode).append(codeText[i]);
	}
	//code.innerHTML = string;
	
	//Make links turn red when cursor hovers over them
	$("a").hover(function() {
       $(this).css("color", "red"); 
    },function() {
        $(this).css("color", "black");
    });
    
    //Make all code separators perform something when hovered and clicked
    $(".sep").hover(function() {
        $(this).css("background", "#D1D1E0");
    }, function() {
        $(this).css("background", "white");
    }).click(function() {
        $(this).replaceWith("<br>><br>");
        console.log($(this).attr("id"));
    });
}

//Add listeners to links in program code window
function addListeners() {
	for (var i = 0; i < toDraw.length; i++) {
		if (toDraw[i].type == "point") { //Element is point object
			if (toDraw[i].assigned) {
				makeListener("pclick" + i, i);
				makeListener("aclick" + i, i);
				makeListener("bclick" + i, i);
				makeListener("delete1" + i, i);
			}
			if (toDraw[i].active) {
				makeListener("draw" + i, i);
				makeListener("delete2" + i, i);
			}
		}
		else if (toDraw[i].type == "line") { //Element is a line object
			if (toDraw[i].assigned) {
				makeListener("deleteVar" + i, i);
				makeListener("lclick" + i, i);
				makeListener("startX" + i, i);
				makeListener("startY" + i, i);
				makeListener("endX" + i, i);
				makeListener("endY" + i, i);
			}
			if (toDraw[i].active) {
				makeListener("deleteDraw" + i, i);
				makeListener("draw" + i, i);
			}
		}
		else if (toDraw[i].type == "circle") {
			if (toDraw[i].assigned) {
				makeListener("deleteVar" + i, i);
				makeListener("cclick" + i, i);
				makeListener("startX" + i, i);
				makeListener("startY" + i, i);
				makeListener("radius" + i, i);
			}
			if (toDraw[i].active) {
				makeListener("deleteDraw" + i, i);
				makeListener("draw" + i, i);
			}
		}
		else if (toDraw[i].type == "polygon") {
			if (toDraw[i].assigned) {
				makeListener("deleteVar" + i, i);
				makeListener("gclick" + i, i);
				for (var y = 0; y < toDraw[i].angles.length; y++) {
				    makeListener("deletePoint" + y, i);
					makeListener("startgX" + y, i);
					makeListener("startgY" + y, i);
				}
			}
			if (toDraw[i].active) {
				makeListener("deleteDraw" + i, i);
				makeListener("draw" + i, i);
			}
		}
	}
	
	//Makes new listener instances for specific link
	function makeListener(evt, index) {
		if (toDraw[index].type == "point") { //Make listeners for point object
			var link = document.getElementById(evt);
			if (evt.search("pclick") != -1) { //User clicked the variable on the left side of the assignment
				link.onclick = function() {
					console.log("Choose from declared variables");
					return false;
				}
			}
			else if (evt.search("aclick") != -1) { //User clicked the x coordinate of a point
				link.onclick = function() {
					console.log("Change value of X coordinate");
					return false;
				}
			}
			else if (evt.search("bclick") != -1) { //User clicked the y coordinate of a point
				link.onclick = function() {
					console.log("Change value of Y coordinate");
					return false;
				}
			}
			else if (evt.search("draw") != -1) { //User clicked the variable inside the draw code for a point
				link.onclick = function() {
					console.log("Change what is drawn");
					return false;
				}
			}
			else if (evt.search("delete1") != -1) { //User clicked the '*' in front of variable assignment for a point
				link.onclick = function() {
					var del = confirm("Are you sure you want to delete the highlighted text?");
					 if (del) {
					 	toDraw[index].assigned = false; //set assigned boolean to false;
					 	writeCode(); //Update Program Code window
					 }
					 else
					 	console.log("Don't delete point assignment");
					return false;
				}
			}
			else if (evt.search("delete2") != -1) { //User clicked the '*' in front of 'draw(p_)
				link.onclick = function() {
					var del = confirm("Are you sure you want to delete the highlighted text?");
						if (del) {
							toDraw[index].active = false; //Currently this deletes the point immediately. Need to implement Run/Walk
							writeCode(); //Update program code window
						}
						else
							console.log("Don't delete draw assignment");
						return false;
				}
			}
		}
		else if (toDraw[index].type == "line") { //Make listeners for line object
			var link = document.getElementById(evt);
			if (evt.search("deleteVar") != -1) { //User clicked the '*' in front of variable assignment for a line
				link.onclick = function() {
					var del = confirm("Are you sure you want to delete the highlighted text?");
					if (del) {
						toDraw[index].assigned = false; //Set assigned boolean to false
						writeCode(); //Update program Code window
					}
					else
						console.log("Don't delete it");
					return false;
				}
			}
			else if (evt.search("lclick") != -1) { //User clicked on variable on the left side of the assignment
				link.onclick = function() {
					console.log("Change what variable user is assigning");
					return false;
				}
			}
			else if (evt.search("startX") != -1) { //User clicked on the X coordinate for the starting position of a line
				link.onclick = function() {
					console.log("change value of startX");
					return false;
				}
			}
			else if (evt.search("startY") != -1) { //User clicked on the Y coordinate for the starting position of a line
				link.onclick = function() {
					console.log("change value of startY");
					return false;
				}
			}
			else if (evt.search("endX") != -1) { //User clicked on the X coordinate for the ending position of a line
				link.onclick = function() {
					console.log("change value of endX");
					return false;
				}
			}
			else if (evt.search("endY") != -1) { //User clicked on the Y coordinate for the ending position of a line
				link.onclick = function() {
					console.log("change value of endY");
					return false;
				}
			}
			else if (evt.search("deleteDraw") != -1) {
				link.onclick = function() {
					var del = confirm("Are you sure you want to delete the highlighted text?");
					if (del) {
						toDraw[index].active = false; //Set active to false
						writeCode(); //Update Program Code window
					}
					else
						console.log("Don't delete it");
					return false;
				}
			}
			else if (evt.search("draw") != -1) {
				link.onclick = function() {
					console.log("change variable that is drawn");
					return false;
				}
			}
		}
		else if (toDraw[index].type == "circle") { //Make listeners for circle object
			var link = document.getElementById(evt);
			if (evt.search("deleteVar") != -1) {
				link.onclick = function() {
					var del = confirm("Are you sure you want to delete the highlighted text?");
					if (del) {
						toDraw[index].assigned = false; //Set the assigned boolean of element to false
						writeCode(); //Update Program Code window
					}
					else
						console.log("don't delete variable assignment");
					return false;
				}
			}
			else if (evt.search("cclick") != -1) {
				link.onclick = function() {
					console.log("change variable to be assigned");
					return false;
				}
			}
			else if (evt.search("startX") != -1) {
				link.onclick = function() {
					console.log("change X variable of circle center");
					return false;
				}
			}
			else if (evt.search("startY") != -1) {
				link.onclick = function() {
					console.log("change Y variable of circle center");
					return false;
				}
			}
			else if (evt.search("radius") != -1) {
				link.onclick = function() {
					console.log("change size of radius");
					return false;
				}
			}
			else if (evt.search("deleteDraw") != -1) {
				link.onclick = function() {
					var del = confirm("Are you sure you want to delete the highlighted text?");
					if (del) {
						toDraw[index].active = false; //Set the active boolean of element to false
						writeCode(); //Update Program Code window
					}
					else
						console.log("Don't delete draw");
					return false;
				}
			}
			else if (evt.search("draw") != -1) {
				link.onclick = function() {
					console.log("change what is drawn");
					return false;
				}
			}
			
		}
		else if (toDraw[index].type == "polygon") { //Make listeners for polygon object
			var link = document.getElementById(evt);
			if (evt.search("deleteVar") != -1) {
				link.onclick = function() {
				    var del = confirm("Are you sure you want to delete the highlighted text?");
				    if (del) {
				        toDraw[index].assigned = false; //Set assigned boolean to false for polygon object
				        writeCode(); //Update Program Code window
				    }
					return false;
				}
			}
			else if (evt.search("gclick") != -1) {
			    link.onclick = function() {
			        console.log("Change variable to be assigned");
			        return false;
			    }
			}
			else if (evt.search("deletePoint") != -1) {
			    link.onclick = function () {
			        console.log("delete point");
			        return false;
			    }
			}
			else if (evt.search("startgX") != -1) {
			    link.onclick = function() {
			        console.log("Change value of startgX: ");
			        return false;
			    }
			}
			else if (evt.search("startgY") != -1) {
			    link.onclick = function() {
			        console.log("Change value of startgY");
			        return false;
			    }
			}
			else if (evt.search("deleteDraw") != -1) {
			    link.onclick = function() {
			        var del = confirm("Are you sure you want to delete the highlighted text?");
			        if (del) {
			            toDraw[index].active = false; //Set active boolean to false for polygon object
			            writeCode(); //Update Program Code window
			        }
			        return false;
			    }
			}
			else if (evt.search("draw") != -1) {
			    link.onclick = function() {
			        console.log("Change what is drawn");
			        return false;
			    }
			}
		}
	}
}

//Makes text click-able. 'id' defines the name of the tag, 'text' is the text that needs to be click-able
function makeLink(id, text) {
	var string = "";
	string += "<a id='" + id + "' href='' style='color:black;text-decoration:none;'>" + text + "</a>";
	return string;
}

//Adds whitespace to HTML
function whiteSpace(spaces) {
	var string = "";
	for (var i = 0; i < spaces; i++)
		string += "&nbsp";
	return string;
}

//Creates separation between code lines with div element
function codeSeparator(index) {
    var string = "<div class='sep' id='separator" + codeSep + "-" + index + 
    "' style='height:6px;width:210px;background-color:white'></div>";
    codeSep++;
    return string;
}

//Allows user to assign values to a declared variable
function assign() {
	console.log("Assign");
}

//Allows user to choose a shape to draw
function drawShape() {
	console.log("Draw declared and assigned shape");
}

//Erases a shape
function erase() {
    console.log("Erase object");
}

//Allow users to change the color of shapes
function changeColor() {
    console.log("change color");
}

//Creates a loop in program window
function loop() {
    console.log("create a loop");
}

//Increments a variable by specified amount
function increment() {
    console.log("increment");
}

//Decrements a variable by specified amount
function decrement() {
    console.log("decrement");
}









/*
 * Controls the Run and Walk features of the Watson Graphcis Lab
 */
//Assign all global variables
var step = 0;
var last = 0;
var line = 50;
var loop = 0;

//Allows users to run the program slowly
function run() {
    if (figureNumber == 1) {
        if (step > 0) {
            codeText[step-1] = whiteSpace(3) + codeText[step-1].substring(48, codeText[step-1].length-4);
            step = 0;
            last = step;
        }
        var figRun = 0;
        var delay = setInterval(function() {
            $("#" + walkName).attr("disabled", true);
            $("#" + runName).attr("disabled", true);
            if (figRun > 1) {
                clearInterval(delay);
                $("#" + walkName).attr("disabled", false);
                $("#" + runName).attr("disabled", false);
            }
            walk();
            figRun++;
        }, 100);
    } else if (figureNumber == 2) {
        if (step > 0) {
            codeText[step-1] = whiteSpace(3) + codeText[step-1].substring(48, codeText[step-1].length-4);
            step = 0;
        }
        writeCode();
        clear();
        $("#" + walkName).attr("disabled", true);
        $("#" + runName).attr("disabled", true);
        toDraw = [];
        
        var i = 0;
        var delay = setInterval(function() {
            if (i > 12) {
                clearInterval(delay);
                $("#" + walkName).attr("disabled", false);
                $("#" + runName).attr("disabled", false);
            }
            walk();
            i++
        }, 100);
    } else if (figureNumber == 3) {
        circleRadius = 50;
        loop = 0;
        if (step > 0) {
            codeText[last] = whiteSpace(3) + codeText[last].substring(48, codeText[last].length-4);
            circleRadius = 50;
            step = 0;
        }
        writeCode();
        clear();
        $("#" + walkName).attr("disabled", true);
        $("#" + runName).attr("disabled", true);
        toDraw = [];
        
        var i = 0;
        var delay = setInterval(function() {
            if (i > 44) {
                clearInterval(delay);
                $("#" + walkName).attr("disabled", false);
                $("#" + runName).attr("disabled", false);
            }
            walk();
            i++;
        }, 100);
    } else if (figureNumber == 4) {
        circleRadius = 50;
        loop = 0;
        if (step > 0) {
            codeText[last] = whiteSpace(3) + codeText[last].substring(48, codeText[last].length-4);
            circleRadius = 50;
            step = 0;
        }
        writeCode();
        clear();
        $("#" + walkName).attr("disabled", true);
        $("#" + runName).attr("disabled", true);
        toDraw = [];
        
        var i = 0;
        var delay = setInterval(function() {
            if (i > 43) {
                clearInterval(delay);
                $("#" + walkName).attr("disabled", false);
                $("#" + runName).attr("disabled", false);
            }
            walk();
            i++;
        }, 100);
    } else if (figureNumber == 5) {
        circleRadius = 50;
        loop = 0;
        if (step > 0) {
            codeText[last] = whiteSpace(3) + codeText[last].substring(48, codeText[last].length-4);
            circleRadius = 50;
            step = 0;
        }
        writeCode();
        clear();
        $("#" + walkName).attr("disabled", true);
        $("#" + runName).attr("disabled", true);
        toDraw = [];
        
        var i = 0;
        var delay = setInterval(function() {
            if (i > 54) {
                clearInterval(delay);
                $("#" + walkName).attr("disabled", false);
                $("#" + runName).attr("disabled", false);
            }
            walk();
            i++;
        }, 100);
    } else if (figureNumber == 6) {
        toDraw = [];
        if (step > 0) {
            codeText[last] = whiteSpace(3) + codeText[last].substring(48, codeText[last].length-4);
            step = 0;
            line = 50;
            loop = 0;
        }
        writeCode();
        clear();
        $("#" + walkName).attr("disabled", true);
        $("#" + runName).attr("disabled", true);
        toDraw = [];
        
        var i = 0;
        var delay = setInterval(function() {
            if (i > 104) {
                clearInterval(delay);
                $("#" + walkName).attr("disabled", false);
                $("#" + runName).attr("disabled", false);
            }
            walk();
            i++;
        }, 100);
    }
}

//Allows users to walk through the program code one step at a time
function walk() {
    if (figureNumber == 1) {
        if (step > 1) {
            codeText[step-1] = whiteSpace(3) + codeText[step-1].substring(48, codeText[step-1].length-4);
            last = step;
            step = 0;
            writeCode();
        }
        else if (step > 0) {
            codeText[step-1] = whiteSpace(3) + codeText[step-1].substring(48, codeText[step-1].length-4);
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            last = step;
            step++;
            writeCode();
            switch(step) {
                case 2:
                    toDraw[toDraw.length] = new makeCircle(150, 150, 50);
                    draw();
                    break;
                default:
                    break;
            }
        }
        else {
            toDraw = [];
            clear();
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            last = step;
            step++;
            writeCode();
        }
    } else if (figureNumber == 2) {
        if (step > 12) {
            codeText[step-1] = whiteSpace(3) + codeText[step-1].substring(48, codeText[step-1].length-4);
            step = 0;
            writeCode();
        }
        else if (step > 0) {
            codeText[step-1] = whiteSpace(3) + codeText[step-1].substring(48, codeText[step-1].length-4);
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            step++;
            writeCode();
            switch(step) {
                case 11:
                    toDraw[toDraw.length] = new makeLine(100, 200, 200, 100, "line");
                    draw();
					$("#" + drawCanvas).trigger("mousemove");
                    break;
                case 12:
                    toDraw[toDraw.length] = new makeLine(200, 200, 100, 100, "line");
                    draw();
					$("#" + drawCanvas).trigger("mousemove");
                    break;
                case 13:
                    var angles = new Array(new point(100, 200, 200, 200), new point(200, 200, 200, 100), new point(200, 100, 100, 100), new point(100, 100, 100, 200));
                    toDraw[toDraw.length] = new makePolygon(angles);
                    draw();
					$("#" + drawCanvas).trigger("mousemove");
                    break;
                default:
                    break;
            }
        }
        else {
            toDraw = [];
            clear();
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            step++;
            writeCode();
        }
    } else if (figureNumber == 3) {
        if (loop > 54) {
            codeText[last] = whiteSpace(3) + codeText[last].substring(48, codeText[last].length-4);
            step = 0;
            last = step;
            loop = 0;
            writeCode();
        }
        else if (step > 0) {
            codeText[last] = whiteSpace(3) + codeText[last].substring(48, codeText[last].length-4);
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            last = step;
            writeCode();
            switch(step) {
                case 6:
                    toDraw[toDraw.length] = new makeCircle(150, 150, circleRadius);
                    circleRadius += 10;
                    draw();
                    $("#" + drawCanvas).trigger("mousemove");
                    break;
                case 8:
                    last = 8;
                    step = 4;
                    loop++;
                    break;
                default:
                    break;
            }
            step++;
            loop++;
        }
        else {
            toDraw = [];
            clear();
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            last = step;
            step++;
            loop++;
            circleRadius = 50;
            writeCode();
        }
    } else if (figureNumber == 4) {
        if (loop > 53) {
            codeText[last] = whiteSpace(3) + codeText[last].substring(48, codeText[last].length-4);
            step = 0;
            last = step;
            loop = 0;
            writeCode();
        }
        else if (step > 0) {
            codeText[last] = whiteSpace(3) + codeText[last].substring(48, codeText[last].length-4);
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            last = step;
            writeCode();
            switch(step) {
                case 5:
                    toDraw[toDraw.length] = new makeCircle(150, 150, circleRadius);
                    circleRadius += 10;
                    draw();
                    $("#" + drawCanvas).trigger("mousemove");
                    break;
                case 7:
                    last = step;
                    step = 3;
                    loop++;
                    break;
                default:
                    break;
            }
            step++;
            loop++;
        }
        else {
            toDraw = [];
            clear();
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            last = step;
            step++;
            loop++;
            circleRadius = 50;
            writeCode();
        }
    } else if (figureNumber == 5) {
        if (loop > 64) {
            codeText[last] = whiteSpace(3) + codeText[last].substring(48, codeText[last].length-4);
            step = 0;
            last = step;
            loop = 0;
            writeCode();
        }
        else if (step > 0) {
            codeText[last] = whiteSpace(3) + codeText[last].substring(48, codeText[last].length-4);
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            last = step;
            writeCode();
            switch(step) {
                case 6:
                    toDraw[toDraw.length] = new makeCircle(150, 150, circleRadius);
                    circleRadius += 10;
                    draw();
                    $("#" + drawCanvas).trigger("mousemove");
                    break;
                case 8:
                    toDraw = [];
                    clear();
                    break;
                case 9:
                    last = step;
                    step = 4;
                    loop++;
                    break;
                default:
                    break;
            }
            step++;
            loop++;
        }
        else {
            toDraw = [];
            clear();
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            last = step;
            step++;
            loop++;
            circleRadius = 50;
            writeCode();
        }
    } else if (figureNumber == 6) {
        if (loop == 0)
            toDraw = [];
        if (loop > 122) {
            if (loop == 124) {
                toDraw[toDraw.length] = new makeLine(50, 240, 250, 240, "line");
                draw();
            }
            if (loop > 124) {
                codeText[9] = whiteSpace(3) + codeText[9].substring(48, codeText[9].length-4);
                step = 0;
                last = step;
                loop = 0;
                line = 50;
                writeCode();
                return;
            }
            codeText[8] = whiteSpace(3) + codeText[8].substring(48, codeText[8].length-4);
            codeText[9] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[9].substring(15, codeText[9].length) + "</p>";
            last = step;
            step++;
            loop++;
            writeCode();
        }
        else if (step > 0) {
            codeText[last] = whiteSpace(3) + codeText[last].substring(48, codeText[last].length-4);
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            last = step;
            writeCode();
            switch(step) {
                case 5:
                    toDraw[toDraw.length] = new makeLine(50, line, 250, line, "line");
                    line += 10;
                    draw();
                    break;
                case 7:
                    toDraw = [];
                    clear();
                    break;
                case 8:
                    last = step;
                    step = 3;
                    loop++;
                    break;
                default:
                    break;
            }
            step++;
            loop++;
        }
        else {
            toDraw = [];
            clear();
            codeText[step] = "<p style='color:red;margin:0;font-weight:bold'>>" + codeText[step].substring(15, codeText[step].length) + "</p>";
            last = step;
            step++;
            loop++;
            writeCode();
        }
    }
}

function point(startX, startY, endX, endY) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
}

/*
 * Figure mode code
 */
$(document).ready(function() {
    $("#" + walkName).attr("disabled", false).click(function() {
		walk();
		});
    $("#" + runName).attr("disabled", false).click(function() {
		run();
		});
	
	if (figureNumber == 1) {
        circleVariables[circleVariables.length] = "c1";
        printVars();
        
        codeText[codeText.length] = whiteSpace(3) + "c1 = ((150, 150), 50)<br>";
        codeText[codeText.length] = whiteSpace(3) + "draw(c1)<br>";
        writeCode();
    } else if (figureNumber == 2) {
        newDistance();
        newDistance();
        pointVariables[pointVariables.length] = "p1";
        pointVariables[pointVariables.length] = "p2";
        pointVariables[pointVariables.length] = "p3";
        pointVariables[pointVariables.length] = "p4";
        lineVariables[lineVariables.length] = "l1";
        lineVariables[lineVariables.length] = "l1";
        polygonVariables[polygonVariables.length] = "g1";
        printVars();
        
        codeText[codeText.length] = whiteSpace(3) + "d1 = 100<br>";
        codeText[codeText.length] = whiteSpace(3) + "d2 = 200<br>";
        codeText[codeText.length] = whiteSpace(3) + "p1 = (d1,d1)<br>";
        codeText[codeText.length] = whiteSpace(3) + "p1 = (d1,d1)<br>";
        codeText[codeText.length] = whiteSpace(3) + "p2 = (d2,d1)<br>";
        codeText[codeText.length] = whiteSpace(3) + "p3 = (d2,d2)<br>";
        codeText[codeText.length] = whiteSpace(3) + "p4 = (d1,d2)<br>";
        codeText[codeText.length] = whiteSpace(3) + "l1 = (p1,p3)<br>";
        codeText[codeText.length] = whiteSpace(3) + "l2 = (p2,p4)<br>";
        codeText[codeText.length] = whiteSpace(3) + "g1 = (p1,<br>" + whiteSpace(3) + whiteSpace(12) + "p2,<br>" + 
        whiteSpace(3) + whiteSpace(12) + "p3,<br>" + 
        whiteSpace(3) + whiteSpace(12) + "p4,<br>" + 
        whiteSpace(3) + whiteSpace(12) + "p1)<br>";
        codeText[codeText.length] = whiteSpace(3) + "draw(l1)<br>";
        codeText[codeText.length] = whiteSpace(3) + "draw(l2)<br>";
        codeText[codeText.length] = whiteSpace(3) + "draw(g1)<br>";
        writeCode();
    } else if (figureNumber == 3) {
        color = "blue";
        newDistance();
        pointVariables[pointVariables.length] = "p1";
        circleVariables[circleVariables.length] = "c1";
        printVars();
        
        codeText[codeText.length] = whiteSpace(3) + "color(blue)<br>";
        codeText[codeText.length] = whiteSpace(3) + "d1 = 50<br>";
        codeText[codeText.length] = whiteSpace(3) + "p1 = (150, 150)<br>";
        codeText[codeText.length] = whiteSpace(3) + "repeat 10 times<br>";
        codeText[codeText.length] = whiteSpace(3) + "loop<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "c1 = (p1,d1)<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "draw(c1)<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "increment(d1,10)<br>";
        codeText[codeText.length] = whiteSpace(3) + "endloop<br>";
        writeCode();
    } else if (figureNumber == 4) {
        color = "blue";
        newDistance();
        circleVariables[circleVariables.length] = "c1";
        printVars();
        
        codeText[codeText.length] = whiteSpace(3) + "color(blue)<br>";
        codeText[codeText.length] = whiteSpace(3) + "d1 = 50<br>";
        codeText[codeText.length] = whiteSpace(3) + "repeat 10 times<br>";
        codeText[codeText.length] = whiteSpace(3) + "loop<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "c1 = ((150,150),d1)<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "draw(c1)<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "increment(d1,10)<br>";
        codeText[codeText.length] = whiteSpace(3) + "endloop<br>";
        writeCode();
    } else if (figureNumber == 5) {
        newDistance();
        pointVariables[pointVariables.length] = "p1";
        circleVariables[circleVariables.length] = "c1";
        printVars();
        
        codeText[codeText.length] = whiteSpace(3) + "color(red)<br>";
        codeText[codeText.length] = whiteSpace(3) + "d1 = 50<br>";
        codeText[codeText.length] = whiteSpace(3) + "p1 = (150, 150)<br>";
        codeText[codeText.length] = whiteSpace(3) + "repeat 10 times<br>";
        codeText[codeText.length] = whiteSpace(3) + "loop<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "c1 = (p1,d1)<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "draw(c1)<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "increment(d1,10)<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "erase(c1)<br>";
        codeText[codeText.length] = whiteSpace(3) + "endloop<br>";
        writeCode();
    } else if (figureNumber == 6) {
        color = "blue";
        newDistance();
        lineVariables[lineVariables.length] = "l1";
        printVars();
        codeText[codeText.length] = whiteSpace(3) + "color(blue)<br>";
        codeText[codeText.length] = whiteSpace(3) + "d1 = 250<br>";
        codeText[codeText.length] = whiteSpace(3) + "repeat 20 times<br>";
        codeText[codeText.length] = whiteSpace(3) + "loop<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "l1 = ((50, d1),(250, d1))<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "draw(l1)<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "decrement(d1,10)<br>";
        codeText[codeText.length] = whiteSpace(3) + whiteSpace(7) + "erase(l1)<br>";
        codeText[codeText.length] = whiteSpace(3) + "endloop<br>";
        codeText[codeText.length] = whiteSpace(3) + "draw(l1)<br>";
        writeCode();
    }
    $(".clickable").click(function() {
        walk();
    });
});











/*
* Contains code for the variable window.
* All variable arrays are declared and 
* the variable window is populated with
* the declared variables
*/

//Declare all variables
var pointVariables = new Array();
var lineVariables = new Array();
var circleVariables = new Array();
var polygonVariables = new Array();
var distanceVariables = new Array();

//Print all declared variables into the variables window
function printVars() {
	var d = "";
	var p = "";
	var l = "";
	var c = "";
	var g = "";
	var total = "";
	
	for (var i = 0; i < distanceVariables.length; i++) //Add all declared distance variables to the total string
		d += distanceVariables[i] + ', ';
	if (d.length > 0)
		total += 'Distance: ' + d + '<br>';
	
	for (var i = 0; i < pointVariables.length; i++) //Add all declared point variables to the total string
		p += pointVariables[i] + ', ';
	if (p.length > 0)
		total += 'Point: ' + p + '<br>';
	
	for (var i = 0; i < lineVariables.length; i++) //Add all declared line variables to the total string
		l += lineVariables[i] + ', ';
	if (l.length > 0)
		total += 'Line: ' + l + '<br>';
	
	for (var i = 0; i < circleVariables.length; i++) //Add all declared circle variables to the total string
		c += circleVariables[i] + ', ';
	if (c.length > 0)
		total += 'Circle: ' + c + '<br>';
	
	for (var i = 0; i < polygonVariables.length; i++) //Add all declared polygon variables to the total string
		g += polygonVariables[i] + ', ';
	if (g.length > 0)
		total += 'Polygon: ' + g + '<br>';
	
	$("#" + varWindow).empty().append(total); //Add all variables to variable window
}

//New Distance variable
function newDistance() {
	paintbrush++;
	distanceVariables[distanceVariables.length] = 'd' + (distanceVariables.length+1);
	printVars();
}



}
