var videos = {
	init: function() {
		this.eventBindings();
	},

	eventBindings: function() {
		$('.video__nav a').click(function() {
			var name = $(this).attr('data-name');
			console.log(name);

			videos.hideVideos();
			videos.showVideo(name);
		});
	}
}

$(function() {
	videos.init();
});