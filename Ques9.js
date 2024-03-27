//Find the error in below code and rectify it

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var person = Person("John Doe", 30);
// console.log(person.name);

//issues encountered= During the creation of object we need to use the #new keyword which is not used in given code


//Rectified Code---

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  var person = new Person("John Doe", 30);
  console.log(person.name);