var videos = {
	init: function() {
		this.eventBindings();
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
		$('#' + id).addClass('show');
	}
}

$(function() {
	videos.init();
});