// Object declaration and initialization
let person =
{
    name : "Venky",
    age : 22,
    city : "Kakinada",
    key : "Lock"
};

//Obj declaration with Inavlid identifiers
let person2 =
{
    name : "Venky",
    "1" : "value1",
    "my choice" : "value2"
};

//Outputs
console.log(person);  //{name: 'Venky', age: 22, city: 'Kakinada'}
console.log(person2);  //{1: 'value1', name: 'Venky', my choice: 'value2'}

//Accessing obj properties
console.log(person.name);      //venky   //with dot operator
console.log(person['name']);   //venky   //with brackets 

// console.log(person2.1)    //Dot operator can't be used for invalid keys

//Undefined
console.log(person.gender);   //invalid

//Accessing the values
let key = "name";
console.log(person[key]);  //Venky
console.log(person.key);   //Lock


//object Destructuring
let {name} = person;
console.log(name); //venky
//for multiple keys
let {age, city} = person;
console.log(name); //venky
console.log(age); //22
console.log(city); //kakinada

//Modifying obj property
person.name = "Vasu";
console.log(person.name); //Vasu

person['age'] = 25;
console.log(person['age']);  //25

//Adding new Property
person.gender = "Male";
console.log(person);  //{name: 'Vasu', age: 25, city: 'Kakinada', key: 'Lock', gender: 'Male'}
console.log(person.gender); //Male


//Function as a key

let A =
{
    run : function()
    {
        console.log("Start Running");
    }
};
A.run(); //Start Running


//Array as a key
let B =
{
    myArray : [1, "abc", 123]
};
console.log(B.myArray); //[1, 'abc', 123]
console.log(B.myArray[0]); //1
console.log(B['myArray'][1]); //abc

//Object as a key
let C=
{
    car : 
    {
        name : "Audi",
        model :"A6",
        color : "White"
    }
};
console.log(C.car.name);  //Audi
console.log(C['car'].name);  //Audi
console.log(C['car']['name']);  //Audi
console.log(C.car['name']);  //Audi