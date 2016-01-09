var app = {
	init: function() {
		this.eventBindings();
	},

	eventBindings: function() {
		$('.cta').click(function(e) {
			e.preventDefault();
			app.compileSelections();
		});
	},

	selections: {},

	compileSelections: function() {
		for (i = 0; i < 5; i++) {
			app.generateNumberUpTo(69, i);
		}

		app.generateNumberUpTo(26, 'power');
	},

	generateNumberUpTo: function(maxValue, index) {
		var choice = Math.ceil(Math.random() * maxValue);
		app.selections['ball_' + index] = choice;

		app.displayNumber(index);
	},

	displayNumber: function(i) {
		if (i === 'power') {
			$('.' + i).html(app.selections['ball_' + i]);
		} else {
			$('.number').eq(i).html(app.selections['ball_' + i]);
		}
	}
}

$(function() {
	app.init();
});