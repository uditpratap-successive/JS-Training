//Write a program to remove duplicate characters from string ("Hello Yellow" => "Helo Yw")
let str = "Hello Yellow";
let arr_str = str.split("");
let newarr=[...new Set(arr_str)];
arr_str=newarr.join("");
console.log(arr_str)

//output= Helo Yw