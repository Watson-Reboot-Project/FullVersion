var exerciseFigsText = [];
var exerciseFigs = [];						// array to hold all digital logic figures for exercises
var section;

function setupExerciseButtons(sectID) {
	section = getContentByID(sectID).replace("Section ", "");
	section = section.substring(0, section.indexOf(" "));

	populateExerciseDivs();

	var exerciseList = document.getElementById("exerciseList").children;
	var exercises = document.getElementsByClassName("solvable");

	for (var i = 0; i < exercises.length; i++) {
		for (var j = 0; j < exerciseList.length; j++) {
			if (exerciseList[j].children.length != 0 && (exerciseList[j].children[0] == exercises[i])) {
				var textContent = exercises[i].textContent.replace("\n", "");
				while (textContent.charCodeAt(0) == 9) textContent = textContent.substring(1, textContent.length);
				while (textContent.charCodeAt(textContent.length - 1) == 9) textContent = textContent.substring(0, textContent.length - 2);

				var id = exercises[i].className.replace("exercise solvable ", "");
				var exer = new DigitalLogicFigure("container-exer" + id, id, false, true);
				exerciseFigs.push(exer);
				exerciseFigsText[id] = [ (j + 1), textContent ];
				$("#container-exer" + id).slideUp();
			}
		}
	}
}


function populateExerciseDivs() {
	var divs = document.getElementsByClassName("exerciseDiv");
	
	for (var i = 0; i < divs.length; i++) {
		var exerID = divs[i].className.replace("exerciseDiv ", "");
		divs[i].innerHTML = '<button id="solve1" onclick="solveButton(' + exerID + ')">Solve</button>\
								<button id="toggle' + exerID + '" onclick="toggleView(\'toggle' + exerID + '\', \'container-exer' + exerID + '\');">View</button> \
								<div id="container-exer' + exerID + '" class="Centered" style="border: 2px solid blue; margin-top:5px;"></div>\
								<br><br>';
	}
}

function toggleView(buttonID, divID) {
	var div = document.getElementById(divID);
	var button = document.getElementById(buttonID);
	
	if (button.textContent == "View") { $("#" + divID).slideDown("medium"); button.textContent = "Hide"; }
	else { $("#" + divID).slideUp("medium"); button.textContent = "View"; }
}

function solveButton(exerID) {
	var exercise = exerciseFigsText[exerID];
	
	localStorage.setItem("currExerNum", exerID);
	localStorage.setItem("currExerQues", "Problem " + section + "." + exercise[0] + ": " + exercise[1]);

	var win = window.open("solveExer.html", '_blank');
	win.focus();
}

visibly.onVisible(function () {
	refreshDLFigures();
});

function refreshDLFigures() {
	for (var i = 0; i < exerciseFigs.length; i++) {
		exerciseFigs[i].retieveUpdates();
	}
}