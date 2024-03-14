//Ques 1 -Find Error in below questions and rectify them

//  let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
// }


//issue encountered-- Loop is running more then the precise limit, hence print undefined in last iteration


//RECTIFIED CODE

let myArray=[1,2,3,4];
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}
