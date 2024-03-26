//Implement a function that returns a resolved Promise after a specified delay using async/await.
const func=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let i=10;
            console.log("I am going to print");
            resolve("success");
        }, 4000);
    })
}
async function getvalue(){
   const a= await func();
   console.log(a);
}
getvalue();

// output=I am going to print
// success

