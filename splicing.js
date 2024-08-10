let myArray = [1,2,3,4,5,6,'a','b','c'];
//Using splicing 
let delItems = myArray.splice(3,2);
//Printing array after splicing
console.log(myArray);
//Printing the items which were deleted through splicing
console.log(delItems);

// adding new elemets using splicing
myArray.splice(2,2,true,"z",'y','x');
console.log(myArray);

//adding without removing any items
myArray.splice(2,0,'new','elmnt');
console.log(myArray);


//Replacing existing element
myArray.splice(2,1,'old');
console.log(myArray);

//replacing multiple elements
myArray.splice(4,4,false,'x','y','z');
console.log(myArray);
