//Write a program to sort an array (bubble sort)

const bubbleSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
};
const sortedArray = bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(sortedArray);

/*
 const negativeArray = [-5, -3, -7, -2, -1];
const sortedNegativeArray = bubbleSort(negativeArray.slice());
console.log(sortedNegativeArray);
 Output: [-7, -5, -3, -2, -1]
----------------------------------------------
const repeatedArray = [5, 3, 7, 2, 5, 1, 3, 7, 2];
const sortedRepeatedArray = bubbleSort(repeatedArray.slice());
console.log(sortedRepeatedArray);
// Output: [1, 2, 2, 3, 3, 5, 5, 7, 7]
*/
