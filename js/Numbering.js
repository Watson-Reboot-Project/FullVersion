/* Calls the function within Numbering.js to get the figures and their numbers for this chapter */
function populateFigureDictionary(chapID, spans) {
	var figs = getFigureDictionary(chapID);						// call getFigureNumbers() with this chapter's ID
	for (var i = 0; i < spans.length; i++) {					// for all the spans elements
		var id = spans[i].className.replace("figNum ", "");		// get the unique figure ID which is the second class name
		spans[i].textContent = figs[id];						// set the spans text to its associated figure number by using the dictionary lookup
	}
}

function populateChapterDictionary(spans) {
	var chaps = getChapterDictionary();

	for (var i = 0; i < spans.length; i++) {
		var id = spans[i].className.replace("chapNum ", "");
		spans[i].textContent = chaps[id];
	}
}

function getFigureDictionary(chapID) {
	var chapters = json["chapters"];
	var chapInd;
	var figs = [];

	for (var i = 0; i < chapters.chapter.length; i++) {
		var currChapID = chapters.chapter[i].id;
		if (currChapID == chapID) chapInd = i;
	}
	
	var chapter = chapters.chapter[chapInd];
	for (var i = 0; i < chapter.figures.figure.length; i++) {
		var figID = chapter.figures.figure[i].id;
		figs[figID] = (chapInd + 1) + "." + (i + 1);
	}
	
	return figs;
}

function getChapterDictionary() {
	var chapters = json["chapters"];
	var dict = [];

	for (var i = 0; i < chapters.chapter.length; i++) {
		var chapID = chapters.chapter[i].id;
		dict[chapID] = (i + 1);
	}

	return dict;
}


//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; UNUSED XML FUNCTIONS ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

/*
 * getFigureNumbers()
 *
 *	Gets the figure numbers of a specific chapter by parsing through the master XML file.
 *
 * @param chapID: 		Chapter ID to get figure list from.
 * @param callback: 	It turns out that the ajax call is asynchronous. This means that getFigureNumbers can't just return its result
 *						back to the calling function when it's done. This means the calling function must specify a callback function
 *						as the second parameter to be called when the ajax request has completed. In this case, when the ajax request
 *						is done, it calls the callback function with the dictionary of figures for the specified chapter where each
 *						each entry maps to a figure number.
 *
 * @return				A dictionary (key,value pair) where the key (index) is the unique figure ID and the value is the figure number (e.g. 11.4)
 */
function getFigureNumbersXML(chapID, callback) {
	var dict = new Array();								// new array to store results
	
	$.ajax({
		url: 'everypage2.xml',							// name of xml file
		type: 'GET',									// requesting the xml file
		dataType: 'text',								// we want it as a raw text format
		timeout: 1000,									// time until we give up
		error: function(){
			alert('Error loading XML document');		// alert if there is an error
		},
		success: function(xml) {						// success!
			var arr = $(xml).children();				// grab the children of the xml document (this is an array of chapter nodes)
			for (var i = 0; i < arr.length; i++) {		// iterate throughout these chapter nodes to find the chapter node the calling function requested
				var obj = arr.eq(i);					// makes obj a jquery element that we can call jquery functions on
				
				if (obj.attr("id") == chapID) {			// if the ID of this node equals chapID, it's a match
					arr = obj.children();				// grab the children of this node (this is the sections of this chapter... the last child node is the figures)
					var figures = arr.eq(arr.length - 1).children();	// grab the last node as it is the figures node
					for (var j = 0; j < figures.length; j++) {			// iterate throughout the figures
						obj = figures.eq(j);							// make the figure a jquery object so we can call jquery functions on it
						dict[obj.attr("id")] = (i+1) + "." + (j+1);		// in JavaScript, indexes can be anything, including strings... so the index is the figure ID; the value is the figure number
					}
				}
			}
			
			callback(dict);		// finally call the callback function with the dictionary we made
		}
	});
}

/* TO-DO
 * getSectionNumber()
 *
 * Given a section ID, find the associated section number.
 *
 * @param sectionID:	A unique ID that corresponds to a particular section.
 * @param callback: 	Look at callback parameter for getFigureNumber()
 */
 function getSectionNumber(sectionID, callback) {
	// to be implemented
 }
 
 /* TO-DO
 * getChapterNumber()
 *
 * Given a chapter ID, find the associated chapter number.
 *
 * @param chapterID:	A unique ID that corresponds to a particular chapter.
 * @param callback: 	Look at callback parameter for getFigureNumber()
 */
 function getChapterNumber(sectionID, callback) {
	// to be implemented
 }