
//writes the html from the navbar

               var test = '<body><button id="clickme">fadeToggle p1</button> \
               <div class="navbar navbar-default navbar-fixed-top" id="navbar"> <!--navbar-static-top--> \
				<div class="container">\
					\
					<a href = "#" class="navbar-brand"> <!--<img src="logo.png">--> LOGO HERE </a> \
\
					<button class = "navbar-toggle" data-toggle = "collapse" data-target = ".navHeaderCollapse">\
                                        <span class = "icon-bar"></span>\
                                        <span class = "icon-bar"></span>\
                                        <span class = "icon-bar"></span>\
                                </button>\
\
						<div class = "collapse navbar-collapse navHeaderCollapse">\
\
							<ul class = "nav navbar-nav navbar-right">\
	\
								<li class="dropdown"> <a href="#" class = "dropdown-toggle" data-toggle = "dropdown">\
								Labs<b class = "caret"></b></a>\
\
										  <ul class="dropdown-menu"> \
										  		<li> <a href="#">Chapter 1</a></li>\
										  		<li> <a href="#">Chapter 2</a></li>\
										  		<li> <a href="#">Chapter 3</a></li>\
										  		<li> <a href="#">Chapter 4</a></li>\
										  		<li> <a href="#">Chapter 5</a></li>\
										  		<li> <a href="#">Chapter 6</a></li>\
										  		<li> <a href="#">Chapter 7</a></li>\
										  		<li> <a href="#">Chapter 8</a></li>\
										  		<li> <a href="#">Chapter 9</a></li>\
										  		<li> <a href="#">Chapter 10</a></li>\
										  		<li> <a href="#">Chapter 11</a></li>\
										  		<li> <a href="#">Chapter 12</a></li>\
										  		<li> <a href="#">Chapter 13</a></li>\
										  		<li> <a href="#">Chapter 14</a></li>\
\
\
										   </ul>\
									   </li>\
                                      <li><a href = "#d">Documentation</a></li>\
                                      <li><a href = "#t">Tutorials</a></li>\
                                      <li><a href = "#a">About</a></li>\
									  <li><a href = "#p" id="min">minimize</a></li>\
\
                                \
							</ul>	\
\
\
\
						</div>\
\
\
\
				</div>\
\
			</div>\
			</body?>';
					$('#includedContent').append(test);
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
			var timer;
			$(document).mousemove(function() {
				if (timer) {
					clearTimeout(timer);
					timer = 0;
				}

				if (toggle==0) {$('#navbar').fadeIn();}
				timer = setTimeout(function() {
					$('#navbar').fadeOut()
				}, 3000)
			})			

