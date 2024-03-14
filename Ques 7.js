//Find the error in below code and rectify it;

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 1000); }

//issues-- var has a global scope and let is block scope.


//Rectified code---

    for (let i = 0; i < 10; i++) {
        setTimeout(function() { console.log(i); }, 1000); }