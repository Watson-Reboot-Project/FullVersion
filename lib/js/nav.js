//writes the html from the navbar
// navbar content for index.html, Chapter table of contents 
var navbar_content ='<div class="navbar navbar-default" id="navbar"> <!--navbar-static-top-->\
			<div class="container"> <!-- navbar container -->\
					<button class = "navbar-toggle" data-toggle = "collapse" data-target = ".navHeaderCollapse"> <!--Header button-->\
						<span class = "icon-bar"></span>\
						<span class = "icon-bar"></span>\
						<span class = "icon-bar"></span>\
					</button>\
					<div class="navbar-brand pull-left">\
						<a class="brand" href = "index.html"> <img id="logo" src="lib/images/logo3.png"></a> <!--Logo in navbar -->\
					</div>\
					<div class = "collapse navbar-collapse navHeaderCollapse"> <!-- collapse navbar -->\
						<ul class = "nav navbar-nav navbar-right">\
							<li> <a class="increaseFont"><i class="fa fa-plus"></i></a> <!-- Up arrow image --></li>\
							<li> <a><img id="fontAs" src="lib/images/fontAs.png" ></a> </li>\
							<li> <a class="decreaseFont"><i class="fa fa-minus"></i></a> <!-- Up arrow image --></li>\
							<!--<li> <a href="index.html"><i class="fa fa-book"></i>Chapters </a></li>-->\
							<!--<li> <a href="section_toc.html"><i class="fa fa-list-ul"></i>Sections</a></li>-->\
						</ul>\
					</div> <!-- END collapse navbar -->\
				</div>  <!-- END navbar container -->\
			</div> <!-- END navbar-static-top -->\
			<link href = "lib/css/font-awesome.min.css" rel = "stylesheet"><!-- font-awesome glyphicons -->';

// navbar content for chapter index pages (science.html, tools.html ...)
var navbar_content_for_index ='<div class="navbar navbar-default" id="navbar"> <!--navbar-static-top-->\
			<div class="container"> <!-- navbar container -->\
					<button class = "navbar-toggle" data-toggle = "collapse" data-target = ".navHeaderCollapse"> <!--Header button-->\
						<span class = "icon-bar"></span>\
						<span class = "icon-bar"></span>\
						<span class = "icon-bar"></span>\
					</button>\
					<div class="navbar-brand pull-left">\
						<a class="brand" href = "../index.html"> <img id="logo" src="../lib/images/logo3.png"></a> <!--Logo in navbar -->\
					</div>\
					<div class = "collapse navbar-collapse navHeaderCollapse"> <!-- collapse navbar -->\
						<ul class = "nav navbar-nav navbar-right">\
							<li> <a class="increaseFont"><i class="fa fa-plus"></i></a> <!-- Up arrow image --></li>\
							<li> <a><img id="fontAs" src="../lib/images/fontAs.png" ></a> </li>\
							<li> <a class="decreaseFont"><i class="fa fa-minus"></i></a> <!-- Up arrow image --></li>\
							<li> <a href="../index.html"><i class="fa fa-book"></i>Chapters</a></li>\
							<!--<li> <a id="min"><i class="fa fa-arrow-up"></i></a> <!-- Up arrow image -->\
						</ul>\
					</div> <!-- END collapse navbar -->\
				</div>  <!-- END navbar container -->\
			</div> <!-- END navbar-static-top -->\
			<link href = "../lib/css/font-awesome.min.css" rel = "stylesheet"><!-- font-awesome glyphicons -->';

// navbar content for single pages, routing the "Sections" navbar link to the current chapter index
var navbar_content_for_page ='<div class="navbar navbar-default" id="navbar"> <!--navbar-static-top-->\
			<div class="container"> <!-- navbar container -->\
					<button class = "navbar-toggle" data-toggle = "collapse" data-target = ".navHeaderCollapse"> <!--Header button-->\
						<span class = "icon-bar"></span>\
						<span class = "icon-bar"></span>\
						<span class = "icon-bar"></span>\
					</button>\
					<div class="navbar-brand pull-left">\
						<a class="brand" href = "../index.html"> <img id="logo" src="../lib/images/logo3.png"></a> <!--Logo in navbar -->\
					</div>\
					<div class = "collapse navbar-collapse navHeaderCollapse"> <!-- collapse navbar -->\
						<ul class = "nav navbar-nav navbar-right">\
							<li> <a class="increaseFont"><i class="fa fa-plus"></i></a> <!-- Up arrow image --></li>\
							<li> <a><img id="fontAs" src="../lib/images/fontAs.png" ></a> </li>\
							<li> <a class="decreaseFont"><i class="fa fa-minus"></i></a> <!-- Up arrow image --></li>\
							<li> <a href="#" onclick="getCurrChapter(chapObj)"><i class="fa fa-list-ul"></i>Sections</a></li>\
						</ul>\
					</div> <!-- END collapse navbar -->\
				</div>  <!-- END navbar container -->\
			</div> <!-- END navbar-static-top -->\
			<link href = "../lib/css/font-awesome.min.css" rel = "stylesheet"><!-- font-awesome glyphicons -->';							
	
	var prevArrowHTML = '<span id="prevArrowStyle"><a href="#" onclick="prevArrowPage(pageObj)">\
						<img style="border:0;" src="../lib/images/left-arrow-blue.png" alt="Previous page" width="40">\
						</a></span>';
	var nextArrowHTML = '<span id="nextArrowStyle"><a href="#" onclick="nextArrowPage(pageObj)">\
						<img style="border:0;" src="../lib/images/right-arrow-blue.png" alt="Next page" width="40">\
						</a></span>';
						
	var prevArrowHTMLMain = '<a href="#" onclick="prevArrowPage(pageObj)">\
						<img style="border:0;" src="lib/images/left-arrow-blue.png" alt="Previous page" width="40">\
						</a>';
	var nextArrowHTMLMain = '<a href="#" onclick="nextArrowPage(pageObj)">\
						<img style="border:0;" src="lib/images/right-arrow-blue.png" alt="Next page" width="40">\
						</a>';
						
	var prevChapterButtonHTML = '<div class="col-md-5 col-sm-6 col-xs-12">\
									<a href="#" onclick="prevArrowPage(chapObj)">\
									<button class="btn btn-sm btn-blue" type="button"><i class="fa fa-step-backward"></i> Previous Chapter</button>\
									</a>\
								</div>';
					

	var nextChapterButtonHTML = '<div class="col-md-5 col-sm-6 col-xs-12 pull-right">\
								<a href="#" onclick="nextArrowPage(chapObj)">\
								<button class="btn btn-sm btn-blue" type="button">Next Chapter <i class="fa fa-step-forward"></i></button></a></div>';
	
	/* Populate chapter buttons HTML */
	function populateChapterButtons() {
		var prevButtonDiv = document.getElementById("prevButtonDiv");	// get previous button div
		var nextButtonDiv = document.getElementById("nextButtonDiv");	// get next button div
		
		prevButtonDiv.innerHTML = prevChapterButtonHTML;				// populate previous button div with previous button HTML
		nextButtonDiv.innerHTML = nextChapterButtonHTML;				// populate next button div with next button HTML
	}
	
	/* Populate nav bar HTML */
	function populateNav() {
		var navDiv = document.getElementById("includedContent");									// get the div that pertans to nav bar
		var navDivChap = document.getElementById("includedContentChapterTOC");						// get the div that pertans to nav bar
		var navDivSection = document.getElementById("includedContentForPage");					// get the div that pertans to nav bar
		
		var prevDiv = document.getElementsByClassName("floating-previous")[0];		// get the div that is associated with previous button arrow
		var nextDiv = document.getElementsByClassName("floating-next")[0];			// get the div that is associated with next button arrow
		
		if(navDiv) {											// we are in main index.html
			navDiv.innerHTML = navbar_content;
			prevDiv.innerHTML = prevArrowHTMLMain;				// populate previous arrow div with previous arrow HTML
			nextDiv.innerHTML = nextArrowHTMLMain;				// populate next arrow div with next arrow HTML
		}
		else if(navDivChap) {
			navDivChap.innerHTML = navbar_content_for_index;
			prevDiv.innerHTML = prevArrowHTML;											// populate previous arrow div with previous arrow HTML
			nextDiv.innerHTML = nextArrowHTML;											// populate next arrow div with next arrow HTML
		}
		else if(navDivSection) {
			navDivSection.innerHTML = navbar_content_for_page;
			prevDiv.innerHTML = prevArrowHTML;											// populate previous arrow div with previous arrow HTML
			nextDiv.innerHTML = nextArrowHTML;											// populate next arrow div with next arrow HTML
		}
	}
		
		/*var toggle = 0;
		  $('#min').click(
		  function() {
		  $('#navbar').slideUp('slow');
						toggle=1;
		  }
		  );
		  $('#clickme').click(
		  function() {
		  $('#navbar').slideDown('slow');
						toggle=0;
		  }
		  );*/
			/*var timer; /* disapearing navbar, disapearing up/down arrow, next and prev. arrows */
			/*$(document).mousemove(function() {
				if (timer) {
					clearTimeout(timer);
					timer = 0;
				}

				if (toggle==0) {$('#navbar').fadeIn(); $('#rarrow').fadeIn(); $('#larrow').fadeIn(); }
				else {$('#clickme').fadeIn(); $('#rarrow').fadeIn(); $('#larrow').fadeIn();}
				timer = setTimeout(function() {
					$('#navbar').fadeOut(); $('#clickme').fadeOut(); $('#rarrow').fadeOut(); $('#larrow').fadeOut();
				}, 3000)
			}); */

								//font sizing
			  $('.increaseFont').click(
			  	function() {
				  	var curFontSize = $('.page-wrapper').css('font-size');
				  	var newFontSize; // holds the new font size
						$('.page-wrapper').css('font-size', newFontSize = (parseInt(curFontSize)+1));
					}
			  );

			  $('.decreaseFont').click(
			  	function() {
			  		var curFontSize = $('.page-wrapper').css('font-size');
						$('.page-wrapper').css('font-size', newFontSize = (parseInt(curFontSize)-1));
					}
			  );

			/*// font size increse/decrese using slider
			$('#fontSlider').slider(); 
			var fontChange = function() {
					  $('.page-wrapper').css('font-size', r.getValue())
					};

					var r = $('#fontSlider').slider()
							.on('slide', fontChange)
							.data('slider');*/





