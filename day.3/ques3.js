/*Print the pattern
       *
      *  *
    *  *  *
  *  *  *  *
*  *  *  *  *
  *  *  *  *
    *  *  *
     *  *
       *
*/
function createDimondShape(size) {
    var star = "";
    for (var i = 1; i <= size; i++) {
      for (var s = size - 1; s >= i; s--) {
        star += (" ");
      }
      for (var j = 1; j <= i; j++) {
        star += ("* ")
      }
      star += "\n";
    }
    if (i == size + 1) {
      for (var i = 1; i <= size - 1; i++) {
        for (var s = 1; s <= i; s++) {
          star += (" ");
        }
        for (j = i; j <= size - 1; j++) {
          star += ("* ");
        }
        star += "\n";
      }
    }
    console.log(star);
  }
  createDimondShape(5);