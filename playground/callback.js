var getUser = (id, callback) => {
	var user = {
		id: id,
		name: "Athavan"
	};
	setTimeout(() => {
		callback(user);
	}, 3000);
	//callback(user);
}
getUser(32, (userObject) => {
	console.log(userObject);
});

https://maps.googleapis.com/maps/api/geocode/json?address=tnagar