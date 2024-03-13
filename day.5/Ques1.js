//Write Program to iterate over the object

const iterator=(obj)=>{
let answer=Object.keys(obj);

return answer;
}

const Company={
    namee:"successive",
    certification:"ISO",
    Cmmi_level:3,
}
console.log(iterator(Company));

