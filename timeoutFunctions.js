let count = 0;
setTimeout(function()
{
    console.log("Happy Birthday!");
    count += 1;
}, 5000);

//clear Timeout

let unique1 = setTimeout(function()
{
    console.log("Hey what a coincidence");
},10000);

clearTimeout(unique1);   //Comment this line to see the difference