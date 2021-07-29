const express = require('express');

const app = express();

app.get('',(req,res) =>{
    res.send([{
        name: "udit tyagi",
        email: "udittyagi455@gmail.com"
    },{
        name: "piyush sharma",
        email: "piyushsharma355@gmail.com"
    }]);
});
app.get('/help', (req,res)=>{
    res.send("This is help page!  ")
})

//Challenge 1.: setup two new routes
//
// 1. setup an about route and render a page title 
// 2. setup a weather route and render a page title
// 3. test your work by visiting both in the browser

//challenge 2. update routes
//
// 1. setup about route to render a title with HTML
// 2. setup a weather route to send back JSON
//      - object with forecast and location string
// 3. Test your work by visiting both in the browser 

app.get("/about",(req,res)=>{
    res.send("<h1>This is About Page! </h1>")
});

app.get("/weather",(req,res)=>{
   res.send({
       forecast: "It is cloudy",
       location: "muzaffarnagar,uttar pradesh,India"
   })
})
//challenge 1. completed

app.listen(3300, ()=>{
    console.log("listining to port 3300.....");
})