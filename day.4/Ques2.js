const reverser = (string) => {
    let splitstring=string.split(" ");
    for(let i=0;i<splitstring.length;i++)
    {
        splitstring[i]=splitstring[i].split("").reverse().join("")
    }
    return splitstring.join(" ");
};


console.log(reverser("Hello JOhn"));
