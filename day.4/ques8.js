// Write a program to remove duplicate elements from an array
const dup_remover=(arr)=>{
    return[...new Set(arr)];

}
console.log(dup_remover([2,2,4,1,5,5,6,6,7,8,9,9]))

