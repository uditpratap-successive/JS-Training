//Write a program to reverse words in string.

const reverser = (string) => {
    return string
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
};

console.log(reverser("Hello John"));

//output= olleH nhoJ

