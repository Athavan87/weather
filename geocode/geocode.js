const request = require('request');

var geocodeAddress = (address, callback) => {
	var encodedAddess = encodeURIComponent(address);

	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddess}`,
		json: true
	}, (error, response, body) => {
		if(error){
			callback('Unable to connect google server:');
		}else if(body.status === 'ZERO_RESULTS'){
			callback('Unable to find that address:');
		}else if(body.status === 'OK'){	
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				langitude: body.results[0].geometry.location.lng
			});
		}
	});
};

module.exports.geocodeAddress = geocodeAddress;
//34dd882ba50d4c4438077fcf8fe4f41f