let profile = 
{
    name : "Venky",
    age : 22,
    city : "Kakinada"
};

//Converting js obj into JSON obg using stringify()
let stringifiedProfile = JSON.stringify(profile);

console.log(stringifiedProfile);
console.log(typeof(stringifiedProfile));

//strified output stored as convertedProfile
let convertedProfile = '{"name":"Venky","age":22,"city":"Kakinada"}';

//using JSON.parse()
console.log(JSON.parse(convertedProfile));


////local storage

//setItem()
localStorage.setItem("profileDetails",JSON.stringify(profile));

//getItem()
let stringifiedProfileDetails = localStorage.getItem("profileDetails");

//converting to js object
let parsedProfileDetails = JSON.parse(stringifiedProfileDetails);

console.log(parsedProfileDetails);