//Write a program to print fibonicci series

function fibonacci(n) {
  let fibSeries = [0, 1];

  for (let i = 2; i < n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }

  return fibSeries;
}
const n = 10;
const result = fibonacci(n);

console.log(result);

// output=[
//     0, 1,  1,  2,  3,
//     5, 8, 13, 21, 34
//   ]