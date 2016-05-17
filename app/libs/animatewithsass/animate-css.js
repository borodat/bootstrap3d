//Author URL: http://webdesign-master.ru
(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				};
			}, {
				offset: "40%"
			});

		});
	};
})(jQuery);

$(".anim-up").animated("fadeInUp");
$(".anim-right").animated("fadeInRight");
$(".anim-left").animated("fadeInLeft");