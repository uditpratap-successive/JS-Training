/*Print the pattern
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

const printer=(numrow)=>{
    for (i = 0; i < 2 * numrow; i++) {
        let x = 1;
        let pat = "";
        if (i < numrow) {
          for (j = numrow - i - 1; j >= 0; j--) {
            pat += x;
            x++;
          }
          console.log(pat);
        }
      
        let x1 = 1;
        let pat1 = "";
        if (i > numrow - 1) {
          for (let j = 1; j <= i - numrow + 1; j++) {
            pat1 += x1;
            x1++;
          }
          if (pat1.length > 1) console.log(pat1);
        }
      }
      
}
printer(5);
