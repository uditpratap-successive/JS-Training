//Find the error and rectify it.

// async function getData() {
//     setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
//  getData().then(function(data) {
//     console.log(data);
//  });
 
//issues resolved: promise is not declared and hence await was also not used.
  
//Rectified Code

async function getData() {
    return await new  Promise((resolve,reject)=>{
  setTimeout(function () {
    resolve([1, 2, 3, 4, 5]);
  }, 1000);})
}
getData().then(function (data) {
  console.log(data);
});
 
 