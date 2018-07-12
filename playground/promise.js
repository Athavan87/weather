var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(5, 7).then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('Should be 45', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Working...!");
// 		//reject("Unable to fill promise");
// 	}, 2000);	
// });
// somePromise.then((userMsg) => {
// 	console.log("Success:", userMsg);
// }, (erorrmessage) => {
// 	console.log("Erorr:", erorrmessage);
// });  