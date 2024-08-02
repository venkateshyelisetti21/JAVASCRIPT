let myArray = [5 , "six" , 2 , 8.2];   // Initialising array
console.log(myArray);  //Printing array
console.log(myArray[0]);    //Retrieving elements based on index
console.log(myArray[10]);   // Checking by providing invalid index
myArray[1] = 7;    //updating an array
console.log(myArray);   //After updation
let arrayLen =myArray.length;   //Length of an array
console.log(arrayLen);   //Printing len
myArray.push(true);  //adding new elements in an array
console.log(myArray);  //After adding new elements
let lastItem = myArray.pop();  //Removing last item
console.log(myArray , lastItem); //After removing