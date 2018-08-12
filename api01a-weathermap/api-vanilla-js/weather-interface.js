$(document).ready(function() {
	$('#weatherLocation').click(function() {
		const city = $('#location').val();
		$('#location').val("");
		// alert(city);
		let request = new XMLHttpRequest();
		// Template literal for url string value.
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7524e6c02f6f8db56c4ef87e58f793c`;
		// Listen for changes to ready state of XMLHttpRequest.
		request.onreadystatechange = function() {
			if (this.readyState === 4 && this.status === 200) {
				const response = JSON.parse(this.responseText);
				getElements(response);
			}
		}
		// Process request (open and send request).
		request.open("GET", url, true);
		request.send();
		// Callback function that will display response onto page.
		const getElements = function(response) {
			$('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
			$('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
		}
	});
});