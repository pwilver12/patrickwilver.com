var videos = {
	init: function() {
		this.eventBindings();

		var hash = window.location.href.split('#')[1];

		if (hash) {
			this.showVideo(hash);
		}

		if (!$('.videos__nav a').hasClass('active')) {
			videos.toggleActiveNav('ceremony');
		}
	},

	videoUrls: {
		'ceremony': { 'src': '//www.patrickwilver.com/hubfs/videos/wedding-videos/ceremony.mp4', 'poster': 'http://www.patrickwilver.com/hubfs/images/wedding-photos/ceremony.jpg'},
		'cocktail-hour': { 'src': '//www.patrickwilver.com/hubfs/videos/wedding-videos/cocktail-hour.mp4', 'poster': 'http://www.patrickwilver.com/hubfs/images/wedding-photos/cocktail-hour.jpg' },
		'reception': { 'src': '//www.patrickwilver.com/hubfs/videos/wedding-videos/reception.mp4', 'poster': 'http://www.patrickwilver.com/hubfs/images/wedding-photos/reception.jpg' }
	},

	eventBindings: function() {
		$('.videos__nav a').click(function() {
			var name = $(this).attr('data-name');

			videos.toggleActiveNav(name);
			videos.showVideo(name);
		});
	},

	showVideo: function(id) {
		if (videos.videoUrls[id].src) {
			videos.toggleActiveNav(id);
			$('video').attr('src', videos.videoUrls[id].src).attr('poster', videos.videoUrls[id].poster);
		} else {			
			// remove bad anchor, reset url
			var url = window.location.href.split('#')[0];
			var state = { originalUrl: url };
			window.history.replaceState(state, '', url);
		}
	},

	toggleActiveNav: function(name) {
		$('.videos__nav a').removeClass('active');
		$('a[data-name="' + name + '"]').addClass('active');
	}
}

$(function() {
	videos.init();
});