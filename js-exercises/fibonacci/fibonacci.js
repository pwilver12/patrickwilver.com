// Recursion to log fibonacci sequence of n length

var fibonacci = (function() {
	
	var newSequence = {
		eventBindings: function() {
			$('button').click(function() {
				var length = $('input[name="length"]').val();

				if (length) {
					newSequence.printSequence(length);
				}
			});
		},

		generateSequence: function(n) {
			if (n == 0) {
				return 0;
			}

			else if (n == 1) {
				return 1;
			}

			else if (n <= 30) {
				return newSequence.generateSequence(n-2) + newSequence.generateSequence(n-1);
			}
		},

		printSequence: function(num) {
			var sequence = newSequence.generateSequence(num);
			$('.fibonacci__sequence').html(sequence);
		}
	}

	return {
		init: newSequence.eventBindings
	}

})();

$(function() {
	fibonacci.init();
});