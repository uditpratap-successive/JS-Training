// Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const arrayOfObjects = [
  { name: "John", age: 27, id: 1 },
  { name: "Jane", age: 30, id: 2 },
  { name: "Bob", age: 25, id: 3 }
];

function removeIdKey(object) {
  const { id, ...rest } = object;
  return rest;
}


const newArray = arrayOfObjects.map(removeIdKey);

console.log(newArray);

/* output - [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 25 }
]
*/