console.log("Welcome to weather App");
setTimeout(() => {
	console.log('Inside of callback');
}, 2000);
setTimeout(() => {
	console.log('Second Timeout');
}, 0);
console.log('Finihsing up');