$(document).ready(function() {
	$('#weatherLocation').click(function() {
		let city = $('#location').val();
		console.log(city);
		$('#location').val("");
		// HTTP request
		$.ajax({
			// Template strings for url string value.
			url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7524e6c02f6f8db56c4ef87e58f793c`,
			type: 'GET',
			data: {format: 'json'},
			success: function(response) {
				$('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
				$('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
			},
			error: function() {
				$('.errors').text("There was an error processing your request. Please try again.");
			}
		});
	});
});