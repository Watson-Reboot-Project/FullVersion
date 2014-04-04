// Javascript file that retreives the Chapters, Sections, Sub-sections, Sub-Sub-Secitons from the master.XML and displays them on seciton_toc.html (Seciton Table of Contents)
var html = [];	// global HTML array: the recursive functions build on this holding strings of HTML

/*
 * When the document has loaded, go ahead and initiate the AJAX request.
 */
$(document).ready(function() {

	$.ajax({															// ajax request
		url: 'master.xml',							// name of xml document
		type: 'GET',												// we are requesting to view the XML document
		dataType: 'text',										// raw text format
		timeout: 1000,											// a timeout value (though we are pulling from a local XML file)
		error: function(){									// on error display an alery
			alert('Error loading XML document');
		},
		success: function(xml) {						// on success....
			html.push('<ul class="archive_year">');			// push the outter must unorder list element, archive_year is used with collaspe and expand buttons 
			var arr = $(xml).children();								// grab the children of the xml file (this is the chapters)
			for (var i = 0; i < arr.length; i++) {			// iterate throughout the chapters
				getItem(arr.eq(i), 0, (i + 1), "");				// getItem() will recursively make its way through all the subsections of this chapter
			}
			html.push('</ul>');							// closing for outter the unordered list

			$("#ContentAreaSections").append( html.join("") );	// fill the content area with the html
		}
	});
});

/*
 * getItem
 *
 * This function is called recursively to get all the sections/sub-sections of a chapter.
 *
 * @param obj:		The jQuery object/node
 * @param dept:		The depth (of sections) we currently are at (i.e.: chapter level is depth 0, section level is 1, sub-section level is 3, sub-sub-section is 4)
 * @param ind:		The index of the element we are currently visiting (restarts at 1 upon each new depth level
 * @param path:		The 'path' of the node; i.e. 1.2.1 for the first sub-section in Chapter 1, Section 2
 */
function getItem(obj, depth, ind, path) {
	if (!obj.attr('name')) return;							// if the node doesn't have a name, it's the content page; ignore it; we don't want it appearing in TOC
	
	var prefix;		// text to append on each line
	
	if (depth == 0) {										// if the depth is 0, we are on the chapter level
		prefix = "Chapter " + ind + ": ";					// append chapter number (i.e.: 'Chapter 3')
		path = ind;												// add the index to the path
	}
	else prefix = path + ": ";								// if the depth is not 0, we are on a section; append section number (i.e.: 'Section 3.4.2')
	
  html.push('<a href=' + obj.attr('path') + '>');			// add the link element to HTML using the path attribute from XML
	html.push('<li>' + prefix + obj.attr('name'));			// add prefix along with the name from XML of this node
	html.push('</a>');										// close bracket for link
	if (obj.children().length > 0) {						// if this node has children, then there are more sub-sections, so we will recursively call getItem()
		html.push('<ul class="archive_month">');			// push a new list
		var arr = obj.children();							// grab the children of this node
		for (var i = 0; i < arr.length; i++) {				// iterate throughout all children
			if (depth == 0 && i == arr.length - 1) continue;	// if the depth is 0 (on the chapter level) and we are at the last node in the list, we are at the <figures> node (IGNORE FIGURE NODE FOR TABLE OF CONTENTS GENERATION)
			else getItem(arr.eq(i), depth + 1, (i + 1), path + "." + (i+1));	// otherise, it's just a section/sub-section, so call getItem with this node, depth + 1 (as we are going one level deeper, (i + 1) for index, and the new path
		}
		html.push('</ul>');									// close the list
	}
	else {
		html.push('</li>');									// close this list item
	}
}

/* 	UNUSED CODE
 * 		This code is the iterative version of the table of contents; it is limited to only
 *		sections of depth 2 (chapters level 0, sections level 1, sub-sections level 2).
 *		I kept this here... for the very off chance we need it for something.

$(document).ready(function() {
	var xmlhttp;
	var xmlDoc;
	
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.open("GET","everypage.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;

	var htmlOutput = '<ul class="archive_year">';
	var chaps = xmlDoc.getElementsByTagName("chapter");
	
	for (var i = 0; i < chaps.length; i++) {
		var title = chaps[i].getElementsByTagName("cname")[0].childNodes[0].nodeValue;
		var path = chaps[i].getElementsByTagName("cpath")[0].childNodes[0].nodeValue;
		
		htmlOutput += BuildChaptersHTML(title, path, i);
		
		var sections = chaps[i].getElementsByTagName("section");
		if (sections.length != 0) htmlOutput += '<ul class="archive_month">';
		for (var j = 0; j < sections.length; j++) {
			var sectionTitle = sections[j].getElementsByTagName("sname")[0].childNodes[0].nodeValue;
			console.log(j + " Section title: " + sectionTitle);
			var sectionPath = sections[j].getElementsByTagName("spath")[0].childNodes[0].nodeValue;
			
			htmlOutput += BuildSectionsHTML(sectionTitle, sectionPath, i, j);
			
			var subSections = sections[j].getElementsByTagName("sub-section");
			if (subSections.length != 0) htmlOutput += '<ul class="archive_month">';
			for (var k = 0; k < subSections.length; k++) {
				var subSectionTitle = subSections[k].getElementsByTagName("sbname")[0].childNodes[0].nodeValue;
				var subSectionPath = subSections[k].getElementsByTagName("sbpath")[0].childNodes[0].nodeValue;
				
				htmlOutput += BuildSubSectionsHTML(subSectionTitle, subSectionPath, i, j, k);
			}
			if (subSections.length != 0) htmlOutput += '</ul>'
		}
		
		if(sections.length != 0) htmlOutput += '</ul>';
	}
	
		//var begin = '<ul class="archive_year">';
        //var end = '</ul>'
        htmlOutput = htmlOutput + '</ul>';

        // Update the DIV called Content Area with the HTML string
        $("#ContentAreaSections").append(htmlOutput);
});

// function BuildChaptersHTML(chapterName, chapterPath, totalNumFigures, i){
function BuildChaptersHTML(chapterName, chapterPath, i){
    
    // Check to see if their is a "post" attribute in the name field
    
    // Build chapters HTML string and returns it
    output = '';
    output += '<a href=' + chapterPath + '>';
    output += '<li id="years"> Chapter ' + ++i + ': ' + chapterName + '</li>';
    output += '</a>';
    return output;
}

function BuildSectionsHTML(sectionName, sectionPath, i, j) {
	output = '';
    //output += '<ul class="archive_month">';
    output += '<li id="months"><a href=' + sectionPath + '>' + ++i + '.' + ++j + ' ' + sectionName + '</li>';
    //output += '</ul>';
    return output;
}

function BuildSubSectionsHTML(subSectionName, subSectionPath, i, j, k) {
	output = '';
    //output += '<ul class="archive_day">';
    output += '<li id="days"><a href=' + subSectionPath + '>' + ++i + '.' + ++j + '.' + ++k + ' ' + subSectionName + '</li>';
    //output += '</ul>';
    return output;
}
*/


