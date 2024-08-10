let myArray = [1,2,3,45,56,67,89];
let a = myArray.findIndex(function(eachItem)
{
    if (eachItem ==56)
    {
        return true;
    }
    else
    {
        return false;
    }
});
// console.log(a);

let myObjArray = [
    {
        name : "Ajay",
        id : 101
    },
    {
        name : "Balu",
        id : 102
    },
    {
        name : "Charan",
        id : 103
    }
];

let ind = myObjArray.findIndex(
    function(eachItem)
    {
        if(eachItem.id === 102)return true;
        else return false;
    }
);
console.log(ind);


