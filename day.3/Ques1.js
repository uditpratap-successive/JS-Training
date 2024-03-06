//Write a program to perform functionality of a calculator (add,sub,multiply,divide)

const calculator=(a,b,operation)=>{

switch(operation){
    case "add":
        return a+b;
        break;
    case "subtract":
        return a-b;
        break;
    case "multiply":
        return a*b;
        break;
    case "divide":
        return a/b;
        break;
} 
}
console.log(calculator(5,8,"add"));
console.log(calculator(5,9,"subtract"));