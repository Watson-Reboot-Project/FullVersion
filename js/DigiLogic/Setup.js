function Setup(container, figureNo) {
	
	var ratio = 1;
	var initHeight;
	var initWidth;
	var initTableWidth;
	var initScale = 1;
	var maxWidth;
	var initOffset;
	
	this.setStageDimensions = setStageDimensions;
	this.getGScale = getGScale;
	this.setGScale = setGScale;
	this.getMainLayer = getMainLayer;
	this.getStage = getStage;
	this.setStageHeight = setStageHeight;
	//this.setRatio = setRatio;
	this.setInitHeight = setInitHeight;
	this.setInitWidth = setInitWidth;
	this.setMaxWidth = setMaxWidth;
	this.setInitScale = setInitScale;
	
	var timeout = false;
	
	//var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	//var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

	var width = 880;
	var height = 800;
	
	var stage = new Kinetic.Stage({
			container : container,
			width : width,
			height : height
		});
		
	var mainLayer = new Kinetic.Layer();

	var bg = new Kinetic.Rect({
			x : 0,
			y : 0,
			width : stage.getWidth(),
			height : stage.getHeight()
		});

	var thisObj = this;
	
	stage.add(mainLayer);
	mainLayer.add(bg);
	
	var gScale = 1;
	console.log("FigureNo is " + figureNo);
	var truthTable = new TruthTable(container, figureNo);
	var controller = new Controller(this, truthTable);

	var figure = new Figures(this, controller, truthTable);
	figure.setFigure(this, controller, figureNo, width, height, null);
	
	setStageDimensions(initWidth, initHeight);
	
	console.log(width + ", " + height);
	
	$(window).resize( function() {
		if (timeout == false) {
			timeout = true;
			setTimeout(resizeTop, 200);
		}
	});
	
	function setStageDimensions(width, height) {
		stage.setWidth(gScale * width);
		stage.setHeight(gScale * height);
		stage.draw();
	}
	
	function setStageHeight(height) { stage.setHeight(gScale * height); stage.draw(); }
	
	function getStageWidth() { return stage.getWidth(); }
	
	function getGScale() { return gScale; }
	
	function setGScale(num) { gScale = num; controller.refreshScale(); console.log("Setting new scale: " + num); }
	
	function getMainLayer() { return mainLayer; }
	
	function getStage() { return stage; }
	
	resizeTop();
	
	function resizeTop() {
		width = document.getElementById(container).offsetWidth;
		//width = window.innerWidth;
		height = window.innerHeight;
		console.log("w: "+ width);
		console.log("iw: " + initWidth);
		var ratio = width / initWidth;
		console.log("Ratio: " + ratio);
		if (ratio <= initScale) {
			stage.setScale(ratio);
			stage.setSize(initWidth * ratio, initHeight * ratio);
			truthTable.setTruthTableScale((ratio * 1.2) * 100, 3, 0);
			truthTable.setTableOffset((width / 2) - (truthTable.getTableWidth() / 2));
		}
		else {
			stage.setScale(initScale);
			stage.setSize(initWidth * initScale, initHeight * initScale);
			if (ratio * (1.5) >= 1) truthTable.setTruthTableScale(100, 6, 0);
			else truthTable.setTruthTableScale((initScale * 1.5) * 100, 6, 0);
			console.log("calc: " + ((width / 2) - (truthTable.getTableWidth() / 2)));
			truthTable.setTableOffset((width / 2) - (truthTable.getTableWidth() / 2));
		}
		
		timeout = false;
	}
	
	//initOffset = document.getElementById(container).children[0].getBoundingClientRect().left;
	//initOffset = 400;
	//initTableWidth = truthTable.getTableWidth();
	//resizeSide();
	//ratio = 1;
	
	function resizeSide() {
		width = window.innerWidth;
		//width = document.getElementById("wrapper").offsetWidth;
		height = window.innerHeight;
		
		//var leftOffset = document.getElementById(container).children[0].getBoundingClientRect().left;
		//console.log(leftOffset + maxWidth);
		
		//if (leftOffset >= initOffset) { initOffset = leftOffset; }
		
		var ratio = width / (maxWidth);
		console.log("Ratio: " + ratio);
		if (ratio <= 1) {
			stage.setScale(ratio);
			stage.setSize(initWidth * ratio, initHeight * ratio);
			truthTable.setTableOffset((initWidth * (ratio * 1.05)) - 10);
			if (width <= 400) truthTable.setTruthTableScale((ratio * 0.9) * 100, 1);
			else if (width <= 600) truthTable.setTruthTableScale((ratio * 0.9) * 100, 3);
			else if (width <= 800) truthTable.setTruthTableScale((ratio * 0.9) * 100, 4);
			else truthTable.setTruthTableScale((ratio * 0.9) * 100, 5);
		}
		else {
			stage.setScale(1);
			stage.setSize(initWidth, initHeight);
			truthTable.setTableOffset(initWidth - 10);
			truthTable.setTruthTableScale(100, 5);
		}


		timeout = false;
	}
	
	function setRatio(height, width) { ratio = height / width; }
	
	function setInitWidth(width) { initWidth = width; }
	
	function setInitHeight(height) { initHeight = height; }
	
	function setInitWidth(width) { initWidth = width; }
	
	function setInitScale(scale) { initScale = scale; }
	
	function setMaxWidth(width) { maxWidth = width; }
}

//stage = new Kinetic.Stage({container: container, width: width, height: height });
//mainLayer = new Kinetic.Layer({x: 0, y: 0, width: width, height: height });
//bg = new Kinetic.Rect({x: 0, y: 0, width: width, height: height });
//stage.add(mainLayer);
//mainLayer.add(bg);
//inputVals = controller.getInputValues();
//controller = new Controller(thisObj, truthTable);
//figure.setFigure(thisObj, controller, figureNo, width, height, inputVals);
//stage.setScale(ratio);
//stage.setSize(width, height);
//document.getElementById(container).setAttribute("style","height:" + height + "px");
