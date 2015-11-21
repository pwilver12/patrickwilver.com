var videos = {
	init: function() {
		this.eventBindings();
		this.hideVideos();

		var hash = window.location.href.split('#')[1];

		if (hash) {
			this.showVideo(hash);
		} else {
			this.showVideo('ceremony');
		}
	},

	eventBindings: function() {
		$('.video__nav a').click(function() {
			var name = $(this).attr('data-name');

			videos.hideVideos();
			videos.showVideo(name);
		});
	},

	hideVideos: function() {
		$('.video').removeClass('show');
	},

	showVideo: function(id) {
		if ($('#' + id).length > 0) {
			$('#' + id).addClass('show');
		} else {			
			// remove bad anchor, reset url
			var url = window.location.href.split('#')[0];
			var state = { originalUrl: url };
			window.history.replaceState(state, '', url);

			// show default video
			$('#ceremony').addClass('show');
		}
	}
}

$(function() {
	videos.init();
});