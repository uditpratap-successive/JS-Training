/*For the pattern 
1
2 3
4 5 6
7 8 9 10
*/

const printer=(x)=>{
let count=1;
for(let i=0;i<x;i++){
    let row="";
    for(let j=0;j<=i;j++){
        row+=count+" ";
        count++;
    }
   console.log(row);
}
}
printer(6);


