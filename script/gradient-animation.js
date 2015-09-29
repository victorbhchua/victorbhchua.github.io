/*
$(window).load(function() {    

	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
	function resizeBg() {
		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}
					
	}
	                   			
	theWindow.resize(resizeBg).trigger("resize");

});
*/

/*
$(document).scroll(function() {
    $('#wrapper').css('background-position', '0px ' + $(document).scrollTop() + 'px');
});
*/

$("#pulse.click").click(function() {    
    fadeToggle( $('.gradient.two') );
    fadeToggle( $('.gradient.three') );
});


function fadeToggle(el, hide) {
    //el.fadeToggle(1000,null,function() { fadeToggle(el); });
    el.fadeToggle(1000,null,function() {});
}