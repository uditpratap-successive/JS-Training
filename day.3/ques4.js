//Program to print all even number first and all odd number in last

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

const a=[...arr,...arr2];
console.log(a);