(function ($) {

$.sharer = {
	"networks": {
		"facebook": {
			"name": "Facebook",
			"url": "http://www.facebook.com/sharer.php?u=%url%"
			//"url": "http://www.facebook.com/sharer.php?s=100&p[title]=%title%&p[url]=%url%&p[summary]=%description%&p[images][0]=%image%"
			//"url": "http://www.facebook.com/sharer/sharer.php?s=100&amp;p%5Btitle%5D=%title%&amp;p%5Burl%5D=%url%&amp;p%5Bsummary%5D=%description%&amp;p%5Bimages%5D%5B0%5D=%image%"

		},
		"twitter": {
			"name": "Twitter",
			//"url": "https://twitter.com/share?url=%url%&text=%title%+%description%"
			"url": "https://twitter.com/share?url=%url%&text=%title%"
			//"url": "http://twitter.com/intent/tweet?text=%title%+%url%+%image%"
		},
		"linkedin": {
			"name": "LinkedIn",
			//"url": "http://www.linkedin.com/shareArticle?mini=true&url=%url%&title=%title%&summary=%description%&source=in1.com"
			"url": "http://www.linkedin.com/shareArticle?mini=true&url=%url%&title=&title%&summary=%summary%&source=celtelearning.org"
		},
		/*"tumblr": {
			"name": "Tumblr",
			"url": "http://www.tumblr.com/share/link?url=%url%&name=%title%&description=%description%"
		},*/
		"googleplus": {
			"name": "Google+",
			//"url": "https://plusone.google.com/_/+1/confirm?hl=en&url=%url%"
			"url": "https://plus.google.com/share?url=%url%"
		        //"url": "https://m.google.com/app/plus/x/?v=compose&content=[TEXT]%20[IMAGE]%20[URL]"
		}
	},
	"options": {
		"networks": ["facebook", "twitter", "linkedin", "googleplus"],
		"template": $('<a class="sharer-icon" />'),
		"class": "sharer-icon-%network.id%",
		"label": "Share on %network.name%",
		"title": null,
		"description": null,
		"url": null
	}
};

$.fn.sharer = function () {
	var options = $.extend({}, $.sharer.options, options);

	return this.each(function () {
		var container = $(this);

		for (var i = 0; i < options["networks"].length; i++) {
			var network = options["networks"][i],
				networkData = $.sharer.networks[network],
				button = options["template"].clone();

			button
				.data("network", networkData)
				.addClass(options["class"].replace("%network.id%", network))
				.attr("title", options["label"].replace("%network.name%", networkData["name"]))
				.click(function () {
					var networkData = $(this).data("network"),
						popup = networkData["url"]
							.replace("%title%", encodeURIComponent(options["title"] || document.title))
							.replace("%description%", encodeURIComponent(options["description"] || $("meta[name=description]").attr("content")))
							.replace("%url%", encodeURIComponent(options["url"] || location.href));

					window.open(popup, "sharer", "toolbar=0,resizable=1,status=0,width=640,height=528");
				})
				.appendTo(container);
		}
	});
};

}(jQuery));