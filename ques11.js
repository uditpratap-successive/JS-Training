
//Find the error and rectify it.

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() { resolve("Data received"); }, 1000);
//  });
//  promise.then(function(data) {
//     console.log(data);
//  }, function(error) {
//     console.log(error);
//  });

 //issues--.catch is missing

 //Rectified Code----

 var promise = new Promise(function(resolve, reject) {
    setTimeout(function() { resolve("Data received"); }, 1000);
 });
 promise.then(function(data) {
    console.log(data);
 }, function(error) {
    console.log(error);
 }).catch((error)=>error);
