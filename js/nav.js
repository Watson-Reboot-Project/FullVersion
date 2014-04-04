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
							<li> <a href="ch_toc.html"><i class="fa fa-book"></i>Chapters</a></li>\
							<li> <a href="section_toc.html"><i class="fa fa-list-ul"></i>Sections</a></li>\
							<li> <a id="min"><i class="fa fa-arrow-up"></i></a> <!-- Up arrow image -->\
						</ul>\
					</div> <!-- END collapse navbar -->\
				</div>  <!-- END navbar container -->\
			</div> <!-- END navbar-static-top -->\
			<link href = "css/font-awesome.min.css" rel = "stylesheet"><!-- ont-awesome glyphicons -->\
			<script type="text/javascript" src="js/TOCGenerator.js"></script>\
		  <script type="text/javascript" src="js/Numbering.js"></script>\
		  <script type="text/javascript" src="js/Miscellaneous.js"></script>\
		  <script type="text/javascript" src="js/master.js"></script>'

$('#includedContent').append(navbar_content);
		
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



