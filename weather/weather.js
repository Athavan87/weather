const request = require('request');

var getWeather = (lat, lng, callback) => {
	request({
	url: `https://api.darksky.net/forecast/34dd882ba50d4c4438077fcf8fe4f41f/${lat},${lng}`,
	json: true
	}, (erorr, response, body) => {
		if (erorr) {
			callback('Unable to connect weather API:');
		}else if(response.statusCode === 400){
			callback('Unable to fetch weather:');
		}else if(response.statusCode === 200){
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature,
				windSpeed: body.currently.windSpeed,
				summary: body.currently.summary
			});
		}
	});
};
module.exports.getWeather = getWeather;
//https://api.darksky.net/forecast/34dd882ba50d4c4438077fcf8fe4f41f/13.0405026,80.2336924