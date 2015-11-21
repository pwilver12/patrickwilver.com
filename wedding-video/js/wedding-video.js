var videos = {
	init: function() {
		this.eventBindings();

		var hash = window.location.href.split('#')[1];

		if (hash) {
			this.showVideo(hash);
		}
	},

	vimeoUrls: {
		'ceremony': 'https://player.vimeo.com/video/146158163',
		'cocktail-hour': 'https://player.vimeo.com/video/146161762',
		'reception': 'https://player.vimeo.com/video/146155089'
	},

	eventBindings: function() {
		$('.videos__nav a').click(function() {
			var name = $(this).attr('data-name');
			videos.showVideo(name);
		});
	},

	showVideo: function(id) {
		if (videos.vimeoUrls[id]) {
			$('iframe').attr('src', videos.vimeoUrls[id]);
		} else {			
			// remove bad anchor, reset url
			var url = window.location.href.split('#')[0];
			var state = { originalUrl: url };
			window.history.replaceState(state, '', url);
		}
	}
}

$(function() {
	videos.init();
});