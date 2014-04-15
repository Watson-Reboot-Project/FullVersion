function DigitalLogicFigure(container, figureNo, draggable, displayMode) {
	this.retieveUpdates = retrieveUpdates;
	
	var setup = new Setup(container, figureNo, draggable, displayMode);
	
	function retrieveUpdates() {
		setup.retrieveUpdates();
	}
}
