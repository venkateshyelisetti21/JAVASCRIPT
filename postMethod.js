let data = 
{
    name : "Venky",
    gender : "Male",
    email : "venkyvenkatesh3210@gmail.com",
    status : "Active",
};


let options = 
{
    method : "POST",
    Headers :
    {
        "Content-Type" : 'application/json',
        Accept : 'application/json',
        Authorization : 'Bearer 992ac79851dc83c6979b7fcec831af8e5631c90967e0995e1e98558cff4d3c6e'
    },
    body : JSON.stringify(data)
};
let url = "https://gorest.co.in/public-api/users";

fetch(url,options)
.then(function(response)
{
    return response.json();
})
.then(function(jsonData)
{
    console.log(jsonData);
});