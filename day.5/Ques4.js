//Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      name: "udit",
      role: "trainee engineer",
    },
  };
  
  const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };
  
  console.log(deepClone(obj));
  
  /* const obj = { a: 1, b: 2 };
  console.log(deepClone(obj));
  
  After JSON.stringify: {"a":1,"b":2}
  After JSON.parse: { a: 1, b: 2 }
  
  
  const obj = { a: "Hello", b: [1, 2], c: { d: "world" } };
  console.log(deepClone(obj));
  After JSON.stringify: {"a":"Hello","b":[1,2],"c":{"d":"world"}}
  After JSON.parse: { a: "Hello", b: [1, 2], c: { d: "world" } }
  */