//Program to print all even number first and all odd number in last in one iteration..

const arr=[];
const arr2=[];
for(let i=1;i<100;i++){
    if(i%2===0){
        arr.push(i);
    }
    else {
        arr2.push(i);
    }
}
console.log(arr);
console.log(arr2);