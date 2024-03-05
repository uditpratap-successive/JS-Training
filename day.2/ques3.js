//Program to call function inside the function as an argument.

function subtract(a,b){
    console.log(`a-b is ${a-b}`);
}

function calculation(a,b,subtract){
         subtract(a,b);
         return a+b;
          
       
}
console.log(`a+b is ${calculation(3,1,subtract)}`);