const hbs = require('hbs');
const path = require('path')
const express = require('express');
const forcast =require('./utility/forcast')
const geocode =require('./utility/geoCoding')


const app =express();
const port =process.env.port || 3200

const publicDirectory = path.join(__dirname,"../public");
const partialPath = path.join(__dirname,"../src/templetes/partials");
const viewPath = path.join(__dirname,"../src/templetes/views")


app.set("view engine","hbs");
app.set("views",viewPath);
hbs.registerPartials(partialPath);


app.use(express.static(publicDirectory))

app.get("",(req,res)=>{
    res.render("index",{
        title: "Weather",
        name: "Udit Tyagi",

    })
});

app.get("/about",(req,res) =>{
    res.render("about",{
        title: "About",
        name: "Udit Tyagi"
    })
})

app.get("/help",(req,res) =>{
    res.render("help",{
        title: "Help",
        name: "Udit Tyagi"
    })
});

// challenge : update weather endpoint to accept address
//
// 1. No address? send back an error message
// 2. Address? send back the static JSON
//    - Add address property onto JSON which returns the provided address
// 3. Test /weather and /weather?address=philadelphia 

app.get("/weather",(req,res)=>{
    if(!req.query.address){
       return res.send({
           error: "you must provide a address"
       })
    }
    geocode(req.query.address , (error,{latitude,longitude,location}={}) =>{
        if(error){
            return res.send({
                error: error
            })
        }
        forcast('m',latitude,longitude,(error,data)=>{
            if(error){
                return res.send({
                    error: error
                })
            }
            res.send({
                forecast: data,
                location,
                address: req.query.address
            })
        })
    }) 
})

// app.get("/products",(req,res) =>{
//     if(!req.query.search){
//        return res.send({
//            error: "You must provide a search term"
//        })
//     }
//     res.send({
//         products: []
//     })
// })


app.get("*",(req,res) =>{
    res.render("404page",{
        title: "404 page",
        errormsg: "Page Not Found!",
        name: "Udit Tyagi"
    })
})

app.listen(port,()=>{
    console.log("Listing the port "+port+"....");
})