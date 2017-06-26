$(document).ready(function(){
	$("li.hamburger-li").click(function(){
		var li = $("li.hamburger-li");
		var line1 = $("div.hamburger-menu-line:nth-of-type(1)");
		var line2 = $("div.hamburger-menu-line:nth-of-type(3)");
		var line3 = $("div.hamburger-menu-line:nth-of-type(5)");
		if(li.css("right") == "300px"){ //if the hamburger menu is retracting
			li.animate({right: '0'}, {duration: 100, queue: false});
			line1.animate({top: '0'}, {duration: 100, queue: false});
			line3.animate({bottom: '0'}, {duration: 100, queue: false});
			line1.animate({borderSpacing: 0}, {
				step: function(now, fx){
					$(this).css('-webkit-transform', 'rotate('+now+'deg)');
					$(this).css('-moz-transform', 'rotate('+now+'deg)');
					$(this).css('transform', 'rotate('+now+'deg)');
				},
			duration: 100, queue: false}, 'linear');
			line3.animate({borderSpacing: 0}, {
				step: function(now, fx){
					$(this).css('-webkit-transform', 'rotate('+now+'deg)');
					$(this).css('-moz-transform', 'rotate('+now+'deg)');
					$(this).css('transform', 'rotate('+now+'deg)');
				},
			duration: 100, queue: false}, 'linear');
			line2.show();
		}
		else{ //if it's extending
			li.animate({right: '300px'}, {duration: 100, queue: false});
			line1.animate({top: '10px'}, {duration: 100, queue: false});
			line3.animate({bottom: '5px'}, {duration: 100, queue: false});
			line1.animate({borderSpacing: 45}, {
				step: function(now, fx){
					$(this).css('-webkit-transform', 'rotate('+now+'deg)');
					$(this).css('-moz-transform', 'rotate('+now+'deg)');
					$(this).css('transform', 'rotate('+now+'deg)');
				},
			duration: 100, queue: false}, 'linear');
			line3.animate({borderSpacing: -45}, {
				step: function(now, fx){
					$(this).css('-webkit-transform', 'rotate('+now+'deg)');
					$(this).css('-moz-transform', 'rotate('+now+'deg)');
					$(this).css('transform', 'rotate('+now+'deg)');
				},
			duration: 100, queue: false}, 'linear');
			line2.hide();
		}
	});
});