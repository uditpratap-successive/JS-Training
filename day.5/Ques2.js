//Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const arr = [{ name: "U", age: 26 }, { name: "D", age: 21 }, { name: "I", age: 1 }, { name: "T", age: 2 }];

const sorter = (a, b) => {
    if (a.age > b.age) {
        return 1; 
    } else if (a.age < b.age) {
        return -1; 
    } else {
        return 0;
    }
};

const sortedArr = arr.sort(sorter);
console.log(sortedArr);
