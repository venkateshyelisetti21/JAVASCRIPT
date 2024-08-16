let options = 
{
    method : "GET"
};
let url = "https://gorest.co.in/public-api/users";

//statuscode

fetch(url,options)
.then(function(response)
{
    return response.status;
})
.then(function(status)
{
    console.log(status);
});

//statusText

fetch(url,options)
.then(function(response)
{
    return response.statusText;
})
.then(function(statusText)
{
    console.log(statusText);
});

//headers

fetch(url,options)
.then(function(response)
{
    return response.headers;
})
.then(function(headers)
{
    console.log(headers);
});

//url

fetch(url,options)
.then(function(response)
{
    return response.url;
})
.then(function(url)
{
    console.log(url);
});

//text()

fetch(url,options)
.then(function(response)
{
    return response.text();
})
.then(function(data)
{
    console.log(data);
});


//json convertion without using json()

fetch(url,options)
.then(function(response)
{
    return response.text();
})
.then(function(data)
{
    let parsedData = JSON.parse(data);
    console.log(parsedData);
});


//with json()

fetch(url,options)
.then(function(response)
{
    return response.json();
})
.then(function(jsonData)
{
    console.log(jsonData);
});