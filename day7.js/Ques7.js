//7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

const createPromises = (range) => {
  const promises = [];
  for (let i = 0; i < range; i++) {
      promises.push(
          new Promise((resolve, reject) => {
              
              setTimeout(() => {
                  console.log(`Promise ${i + 1} resolved`);
                  resolve(`I am resolved ,I  am promise no. ${i+1}`);
              }, 2000); 
          })
      );
  }
  console.log(promises)
  return promises;
};
const allPromises = createPromises(10);

let hello = async () => {
  const [...a] = await Promise.all(allPromises.map((i)=> i));
  console.log(a);
};

hello();

