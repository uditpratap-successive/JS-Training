//12. Write a program to display intersection of two array---
const intersector=(arr1,arr2)=>{
    let freq={};
    let arr=[];
    for(let i=0;i<arr1.length;i++){
        freq[arr1[i]]=1;
    }
    for(let i=0;i<arr2.length;i++){
        if(freq[arr2[i]]){
            arr.push(arr2[i]);

        }
    }
    return arr;
}
console.log(intersector([1,2,3,4,5,6],[2,3,4]));