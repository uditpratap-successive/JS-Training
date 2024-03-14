//Ques 2-Find error in question and rectify them

//  let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }

//issue encountered--Since the for in loop returns the index or keys of object. So with the help of key we can get the value in the object.
//                   in above code myObject.property will not target to the value of the particular key . We have to do myObject[property];


//RECTIFIED CODE

let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject[property]);
}