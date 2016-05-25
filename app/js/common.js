$(function() {

	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//smoth scroll
	$('.nav--main a').smoothScroll({offset: -40});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: [],
		navContainer: '.slider-contorls'
	}
	);

	//(function($) {
	(function($) {
		$.fn.animated = function(inEffect) {
			$(this).each(function() {
				var ths = $(this);
				ths.css("opacity", "0").waypoint(function(dir) {
					if (dir === "down") {
						ths.addClass(inEffect).css("opacity", "1");
					};
				}, {
					offset: "90%"
				});

			});
		};
	})(jQuery);

	$(".anim-up").animated("fadeInUp");
	$(".anim-right").animated("fadeInRight");
	$(".anim-left").animated("fadeInLeft");
});
