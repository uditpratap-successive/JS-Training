/*For the pattern:
1
2 2
3 3 3
4 4 4 4
*/

const patternbuilder=(x)=>{
    for(let i=1;i<=x;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+=i+" ";
        }
    console.log(row);
    
    }
}
patternbuilder(5)

