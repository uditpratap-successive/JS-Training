// Give an example of using multiple callback functions in a single function in JavaScript

const calculator=(add,sub,multiply,divide,a,b)=>
{
    console.log(a,b);
    return([add(a,b),sub(a,b),multiply(a,b),divide(a,b)]);
}

const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
const multiply=(a,b)=>{
    return a*b;
}
const divide=(a,b)=>{
    return a/b;
}

let a1=10;
let b1=20;

const [ad,su,mu,di] =calculator(add,sub,multiply,divide,a1,b1);

console.log(`sum of ${a1} and ${b1} is ${ad} , subtraction of ${a1} and ${b1} is ${su} , multiplication of ${a1} and ${b1} is ${mu} , division of ${a1} and ${b1} is ${di}`)