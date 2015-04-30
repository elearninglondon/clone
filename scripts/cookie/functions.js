// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

// page scrolling effect 
	$('a.jump').bind('click',function(event){
        var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 2000,'easeOutExpo');
         event.preventDefault();
    });
});

/* when user scrolls */
$(window).scroll( function() {

	
});

function MM_jumpMenuGo(objId,targ,restore){ //v9.0
		  var selObj = null;  with (document) { 
		  if (getElementById) selObj = getElementById(objId);
		  if (selObj) eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
		  if (restore) selObj.selectedIndex=0; }
		}
		function MM_jumpMenu(targ,selObj,restore){ //v3.0
		  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
		  if (restore) selObj.selectedIndex=0;
		}