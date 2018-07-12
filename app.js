const yargs   = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (erorrMessage, results) => {
	if (erorrMessage) {
		console.log(erorrMessage);
	}else{
		console.log(results.address);
		weather.getWeather(results.latitude, results.langitude, (erorrMessage, weatherResults) => {
		if(erorrMessage){
			console.log(erorrMessage);
		}else{
			console.log("Latitude: "+results.latitude);
			console.log("Langitude: "+results.langitude);
			console.log(`Current Temperature: ${weatherResults.temperature}`);
			console.log(`Current ApparentTemperature: ${weatherResults.apparentTemperature}`);
			console.log(`Current WindSpeed: ${weatherResults.windSpeed}`);
			console.log(`Current Summary: ${weatherResults.summary}`);
		}
	});

	}
});

//console.log(argv);

