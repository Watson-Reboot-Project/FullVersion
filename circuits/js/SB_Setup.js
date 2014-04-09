function SB_Setup(container, containerNum) {
	var timeout = false;
	
	this.getMainLayer = getMainLayer;
	this.getWrenchLayer = getWrenchLayer;
	this.getTrashLayer = getTrashLayer;
	this.getStage = getStage;
	this.getBG = getBG;
	this.resetExercise = resetExercise;
	this.deleteComponent = deleteComponent;
	
	var defaultWidth = 880;
	var width = 880;
	var height = 600;
	var thisObj = this;
	
	var stage = new Kinetic.Stage({
			container : container,
			width : width,
			height : height
		});

	var mainLayer = new Kinetic.Layer();
	stage.add(mainLayer);

	var wrenchLayer = new Kinetic.Layer();
	stage.add(wrenchLayer);
	
	var trashLayer = new Kinetic.Layer();
	stage.add(trashLayer);
	
	var bg = new Kinetic.Rect({
		x : 0,
		y : 0,
		width : width,
		height : height
	});
	
	mainLayer.add(bg);

	resize();
	
	var truthTable = new SB_TruthTable(containerNum);
	var controller = new SB_Controller(this, truthTable, 2, 1, containerNum);
	var exercises = new SB_Exercises(stage, this, truthTable, controller, 2, 1);
		
	var curExercise = 0;
	exercises.setExercise(curExercise);
	controller.initTruthTableListeners();
	
	$(window).resize( function() {
		if (timeout == false) {
			timeout = true;
			setTimeout(resize, 200);
		}
	});
	
	function resize() {
		//var width = (window.innerWidth > defaultWidth) ? defaultWidth : window.innerWidth;
		// Burt, uncomment the next line (line 54) and comment the previous line (line 52)
		var width = (document.getElementById(container).offsetWidth > defaultWidth) ? defaultWidth : document.getElementById(container).offsetWidth;
		
		var ratio = (width / defaultWidth);
		console.log("Ratio: " + ratio);
		stage.setScale({x: ratio, y: ratio});
		stage.setSize(defaultWidth * ratio, 600 * ratio);
		console.log("Size: " + stage.getWidth() + ", " + stage.getHeight());
		
		timeout = false;
	}
	
	function resetExercise(numInputs, numOutputs) {
		var table = document.getElementById("truthTable" + containerNum);
		if (table) {
			table.id = "";
			table.parentNode.removeChild(table);
		}
		
		container.innerHTML = "";
		width = 880;
		height = 600;
		stage = new Kinetic.Stage({
			container : container,
			width : width,
			height : height
		});
		mainLayer = new Kinetic.Layer();
		stage.add(mainLayer);
		wrenchLayer = new Kinetic.Layer();
		stage.add(wrenchLayer);
		trashLayer = new Kinetic.Layer();
		stage.add(trashLayer);
		bg = new Kinetic.Rect({
			x : 0,
			y : 0,
			width : width,
			height : height
		});
		mainLayer.add(bg);
		resize();
		truthTable = new SB_TruthTable(containerNum);
		controller = new SB_Controller(thisObj, truthTable, numInputs, numOutputs, containerNum);
		exercises = new SB_Exercises(stage, thisObj, truthTable, controller, numInputs, numOutputs);
		exercises.setExercise(0);
		controller.initTruthTableListeners();
	}
	
	function getMainLayer() { return mainLayer; }
	
	function getTrashLayer() { return trashLayer; }
	
	function getWrenchLayer() { return wrenchLayer; }
	
	function getStage() { return stage; }
	
	function getBG() { return bg; }
	
	function deleteComponent(comp) {
		controller.deleteComponent(comp);
	}
}
