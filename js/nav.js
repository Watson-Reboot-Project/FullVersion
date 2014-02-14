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
							<li class="dropdown">\
          						<a data-toggle="dropdown" class="dropdown-toggle"><img src="Images/font-size.png"></a>\
          						<ul class="dropdown-menu">\
            						<li>\
            						 	<slider type="text" class="span2 filter_slider" value="" data-slider-min="8" data-slider-max="30" data-slider-step="1"data-slider-value="12" id="fontSlider"  style="">\
        							</li>\
          						</ul>\
       						</li>\
							<li> <a href="ch_toc2.html"><i class="fa fa-book"></i>Chapters</a></li>\
							<li> <a href="section_toc.html"><i class="fa fa-list-ul"></i>Sections</a></li>\
							<li> <a id="min"><i class="fa fa-arrow-up"></i></a> <!-- Up arrow image -->\
						</ul>\
					</div> <!-- END collapse navbar -->\
				</div>  <!-- END navbar container -->\
			</div> <!-- END navbar-static-top -->\
			<link href = "css/font-awesome.min.css" rel = "stylesheet"><!-- ont-awesome glyphicons -->\
	    	<link href = "css/slider.css" rel = "stylesheet"><!-- Font slider css -->'

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

			/*//font sizing
			  $('.increaseFont').click(
			  function() {
			  	var curFontSize = $('.wrapper').css('font-size');
				$('.wrapper').css('font-size', parseInt(curFontSize)+1);
				}
			  );
			  $('.decreaseFont').click(
			  function() {
			  	var curFontSize = $('.wrapper').css('font-size');
				$('.wrapper').css('font-size', parseInt(curFontSize)-1);
				}
			  );*/

			  // font size increse/decrese using slider
			  $('#fontSlider').slider(); 
			var fontChange = function() {
					  $('.page-wrapper').css('font-size', r.getValue())
					};

					var r = $('#fontSlider').slider()
							.on('slide', fontChange)
							.data('slider');



