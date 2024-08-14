// type 1
console.log("function-1");
function display(displayName)
{
    console.log("Good Morning!");
    displayName();
    console.log("Hello");
}
display(function ()
{
    console.log("Venky");
});

//type 2
console.log("function-2");
function a(b)
{
    console.log("Hello");
    b();
    console.log("You're Cool!");
}
function b()
{
    console.log("Man");
}
a(b);


//type 3
console.log("function-3");
function x(y)
{
    console.log("chin ");
    y();
    console.log("dum dum ");
}

let  display_Y = function()
{
    console.log("tapak");
}

x(display_Y);