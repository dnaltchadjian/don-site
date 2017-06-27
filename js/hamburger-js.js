$(document).ready(function(){
	$("li.hamburger-li").click(function(){
		var li = $("li.hamburger-li");
		var line1 = $("div.hamburger-menu-line:nth-of-type(1)");
		var line2 = $("div.hamburger-menu-line:nth-of-type(3)");
		var line3 = $("div.hamburger-menu-line:nth-of-type(5)");
		var hnav = $("ul.hnav-menu");
		var screenCover = $("div.screen-cover");

		var durationMillis = 100;
		if(li.css("right") == "300px"){ //if the hamburger menu is retracting
			li.animate({right: '0'}, {duration: durationMillis, queue: false}, 'swing');
			line1.animate({top: '0'}, {duration: durationMillis, queue: false});
			line3.animate({bottom: '0'}, {duration: durationMillis, queue: false});
			hnav.animate({right: '-300px'}, {duration: durationMillis * 5, queue: true}, 'swing');
			line1.animate({borderSpacing: 0}, {
				step: function(now, fx){
					$(this).css('-webkit-transform', 'rotate('+now+'deg)');
					$(this).css('-moz-transform', 'rotate('+now+'deg)');
					$(this).css('transform', 'rotate('+now+'deg)');
				},
			duration: durationMillis, queue: false}, 'linear');
			line3.animate({borderSpacing: 0}, {
				step: function(now, fx){
					$(this).css('-webkit-transform', 'rotate('+now+'deg)');
					$(this).css('-moz-transform', 'rotate('+now+'deg)');
					$(this).css('transform', 'rotate('+now+'deg)');
				},
			duration: durationMillis, queue: false}, 'linear');
			screenCover.hide();
			screenCover.animate({opacity: 0}, {duration: durationMillis, queue: false}, 'linear');
			line2.show();
		}
		else{ //if it's extending
			li.animate({right: '300px'}, {duration: durationMillis, queue: false}, 'swing');
			line1.animate({top: '10px'}, {duration: durationMillis, queue: false});
			line3.animate({bottom: '5px'}, {duration: durationMillis, queue: false});
			line1.animate({borderSpacing: 45}, {
				step: function(now, fx){
					$(this).css('-webkit-transform', 'rotate('+now+'deg)');
					$(this).css('-moz-transform', 'rotate('+now+'deg)');
					$(this).css('transform', 'rotate('+now+'deg)');
				},
			duration: durationMillis, queue: false}, 'linear');
			line3.animate({borderSpacing: -45}, {
				step: function(now, fx){
					$(this).css('-webkit-transform', 'rotate('+now+'deg)');
					$(this).css('-moz-transform', 'rotate('+now+'deg)');
					$(this).css('transform', 'rotate('+now+'deg)');
				},
			duration: durationMillis, queue: false}, 'linear');
			hnav.animate({right: '0'}, {duration: durationMillis* 5, queue: false}, 'swing');
			screenCover.show();
			screenCover.animate({opacity: 9/10}, {duration: durationMillis, queue: false}, 'linear');
			line2.hide();
		}
	});
});