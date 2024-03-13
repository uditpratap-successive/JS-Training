//7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.
const pro1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let value = 1;
      resolve("1");
      console.log("I am printing the value 1");
    }, 1000);
  });
};

const pro2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let value = 2;
      resolve("2");
      console.log("I am printing the value 2");
    }, 2000);
  });
};

const pro3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let value = 3;
      resolve("3");
      console.log("I am printing the value 3");
    }, 3000);
  });
};

const pro4 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let value = 4;
      resolve("4");
      console.log("I am printing the value 4");
    }, 4000);
  });
};

let hello = async () => {
  const [a, b, c, d] = await Promise.all([pro1(), pro2(), pro3(), pro4()]);
  console.log(a, b, c, d);
};

hello();

// output=I am printing the value 1
// I am printing the value 2
// I am printing the value 3
// I am printing the value 4
// 1 2 3 4
