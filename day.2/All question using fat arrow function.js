
             //QUESTION 3-6 USING FAT ARROW FUNCTION

//Question 3 -Program to call function inside the function as an argument.

const subtract = (a, b) => {
    console.log(`a-b is ${a - b}`);
};

const calculation = (a, b, subtract) => {
    subtract(a, b);
    return a + b;
}
console.log(`a+b is ${calculation(5, 5, subtract)}`);



//Question 4:- // return the square of the number:

const square = (num) => {
    return num * num;

}
console.log(square(4));




//Question 5:- //Program to return the sum of the two number.

function sum(a, b) {
    return a + b;

}
console.log(sum(4, 5))



//Question 6:- Program to check the number is even or odd and retrun true or false on that basis.

function checker(num) {
    if (num % 2 == 0) {
        return true;
    }

}
console.log(checker(6));


