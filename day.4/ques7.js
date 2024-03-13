//Write a program to find the index of duplicate elements in array.
const indexfinder=(arr)=>{
   let ind_arr=[];
    let freqchecker={};
    for(let i=0;i<arr.length;i++){
        if(freqchecker[arr[i]]){
            ind_arr.push(i-1);
        }
        else{
            freqchecker[arr[i]]=1;
        }

    }
    return ind_arr;

}
console.log(indexfinder([1,1,2,3,4,5,5,6,7,8,8]));