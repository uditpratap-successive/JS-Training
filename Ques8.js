//Find error in code and rectify it:

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.getDetails = function () {
//   console.log(this.name + " is " + this.age + " years old");
// };
// var person = new Person("John Doe", 30);
//delete person.name;
// person.getDetails();


//issue encountered: After making use of prototype object we added a function #getDetails into the function #Person and when we are calling the function
//                   before that delete person.name executed and hence output is undefined .
                     


//Rectified code--

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.getDetails = function () {
    console.log(this.name + " is " + this.age + " years old");
  };
  var person = new Person("John Doe", 30);
  //delete person.name;
  person.getDetails();
