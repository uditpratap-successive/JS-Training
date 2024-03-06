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


let numrows = 5;
for (let i = numrows; i >= 1; i--) {
    let rows = " ";
    for (let j = 1; j <= i; j++) {
        rows += j + " ";
    }
    console.log(rows);
}

for (let i = 1; i <= 4; i++) {
    let rows = " ";
    let count = 1
    for (let j = 0; j <= i; j++) {
        rows += count + " ";
        count++;
    }
    console.log(rows);
}