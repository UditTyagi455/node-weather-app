const path = require('path')
const express = require('express');
const hbs = require('hbs')

const app = express();

const publicDirectory = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,"../src/templetes/views")
const partialPath = path.join(__dirname,"../src/templetes/partials")

app.set("view engine","hbs");
app.set("views",viewPath)
hbs.registerPartials(partialPath);

// Challenge 3. Create a partial for the footer
//
// 1. Setup the template for the footer aprtial "created by some Name"
// 2. Render the partial at the bottom of all three pages
// 3. test your work by visiting all three pages

app.use(express.static(publicDirectory));

app.get('',(req,res) =>{
    res.render("index",{
        title: "Weather",
        name: 'Udit tyagi'
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{
        title: "About",
        title1: "Harry Potter",
        author: "J.K.Rowling",
        name: "Udit tyagi"
    })
})

// challenge 1. Create two more HTML files
//
// 1. Create a html page for about with "About" title
// 2. Create a html page for help with "help" title
// 3. Remove the old route handlers for both
// 4. Visit both in the browser to test your work


// challenge 2. Create a templete for help page
//
// 1. Setup a help templete to render a help message to the screen
// 2. Setup the help route and render the templetes with an example message
// 3. Visit the route in the browser and see your help message print.

app.get("/help",(req,res)=>{
    res.render("help",{
        title: 'Help',
        help: "HELP ME!",
        name: "Udit tyagi"
    })
})

// Challenge 4. create and render a 404 page with handlebars
//
// 1. Setup the templete to render the header and footer
// 2. Setup the templete to render an error message in a paragraph
// 3. Render the templete for both 404 routes 
//     - page not found
//     - help article not found
// 4. Test your work. visit /what and /help/units

app.get("/help/*", (req,res)=>{
    res.render("404page",{
        errormsg: "Help article not found ",
        title: "404 page",
        name: "Udit tyagi"
    })
})

app.get("*", (req,res) =>{
   res.render("404page",{
       errormsg: "404 Error, Page Not Found!",
       title: "404 Error",
       name: "Udit Tyagi"       
   })
})

// challenge 2 Completed
// challenge 1 completed


app.listen(3200,()=>{
    console.log("Listing at port 3200....");
})