//Find the error in below code and rectify it :
function getData(callback) {
    setTimeout(function() { callback([1, 2, 3, 4, 5]); }, 1000);
 }
 getData(function(data) {
    console.log(data.length);
 });

 //No error;