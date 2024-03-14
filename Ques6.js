//Find the error in below code and rectify it :

// var person = {
//   name: "John Doe",
//   age: 30,
//   getDetails: function () {
//     console.log(this.name + " is " + this.age + " years old");
//   },
// };
// var getPersonDetails = person.getDetails;
// getPersonDetails();

//issues encountered-- Since we know that context of propertied are not accessible outside the object ,so it is showing undefined.So we will use bind method,
//                     Bind helps in binding object with an function and then function can be called.

//Rectified code--


var person = {
    name: "John Doe",
    age: 30,
    getDetails: function () {
      console.log(this.name + " is " + this.age + " years old");
    },
  };
  var getPersonDetails = person.getDetails.bind(person);
  getPersonDetails();

