//writes the html from the navbar
var navbar_content ='<img class="navbar-fixed-top" id="clickme" src="Images/down-arrow.png" > <!-- down arrow img -->\
		<div class="navbar navbar-default navbar-fixed-top" id="navbar"> <!--navbar-static-top-->\
			<div class="container"> <!-- navbar container -->\
					<button class = "navbar-toggle" data-toggle = "collapse" data-target = ".navHeaderCollapse"> <!--Header button-->\
						<span class = "icon-bar"></span>\
						<span class = "icon-bar"></span>\
						<span class = "icon-bar"></span>\
					</button>\
					<div class="navbar-brand pull-left">\
						<a class="brand" href = "index.html"> <img id="logo" src="Images/logo3.png"></a> <!--Logo in navbar -->\
					</div>\
					<div class = "collapse navbar-collapse navHeaderCollapse"> <!-- collapse navbar -->\
						<ul class = "nav navbar-nav navbar-right">\
							<li> <a class="increaseFont"><i class="fa fa-plus"></i></a> <!-- Up arrow image --></li>\
							<li> <a><img id="fontAs" src="Images/fontAs.png" ></a> </li>\
							<li> <a class="decreaseFont"><i class="fa fa-minus"></i></a> <!-- Up arrow image --></li>\
							<li> <a href="index.html"><i class="fa fa-book"></i>Chapter</a></li>\
							<li> <a href="section_toc.html"><i class="fa fa-list-ul"></i>Sections</a></li>\
							<li> <a id="min"><i class="fa fa-arrow-up"></i></a> <!-- Up arrow image -->\
						</ul>\
					</div> <!-- END collapse navbar -->\
				</div>  <!-- END navbar container -->\
			</div> <!-- END navbar-static-top -->\
			<link href = "css/font-awesome.min.css" rel = "stylesheet"><!-- font-awesome glyphicons -->';
	
	var prevArrowHTML = '<a href="#" onclick="prevArrowPage(pageObj)">\
						<img style="border:0;" src="Images/left-arrow-blue.png" alt="Previous page" width="40">\
						</a>';
	var nextArrowHTML = '<a href="#" onclick="nextArrowPage(pageObj)">\
						<img style="border:0;" src="Images/right-arrow-blue.png" alt="Next page" width="40">\
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
		var navDiv = document.getElementById("includedContent");					// get the div that pertans to nav bar
		navDiv.innerHTML = navbar_content;
		
		var prevDiv = document.getElementsByClassName("floating-previous")[0];		// get the div that is associated with previous button arrow
		var nextDiv = document.getElementsByClassName("floating-next")[0];			// get the div that is associated with next button arrow
		
		prevDiv.innerHTML = prevArrowHTML;											// populate previous arrow div with previous arrow HTML
		nextDiv.innerHTML = nextArrowHTML;											// populate next arrow div with next arrow HTML
	}
		
		var toggle = 0;
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
		  );
			var timer; /* disapearing navbar, disapearing up/down arrow, next and prev. arrows */
			$(document).mousemove(function() {
				if (timer) {
					clearTimeout(timer);
					timer = 0;
				}

				if (toggle==0) {$('#navbar').fadeIn(); $('#rarrow').fadeIn(); $('#larrow').fadeIn(); }
				else {$('#clickme').fadeIn(); $('#rarrow').fadeIn(); $('#larrow').fadeIn();}
				timer = setTimeout(function() {
					$('#navbar').fadeOut(); $('#clickme').fadeOut(); $('#rarrow').fadeOut(); $('#larrow').fadeOut();
				}, 3000)
			});

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



