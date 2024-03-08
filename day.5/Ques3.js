// Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

var array = [{"bad": "habit", "good":"consistency"},{"bad":"Practices", "good":"culture"}];

for (var i = 0, len = array.length; i < len; i++) {
  delete array[i].bad;
}
console.log(array);