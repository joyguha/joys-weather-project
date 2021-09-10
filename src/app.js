const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

//public static path
const static_path = path.join(__dirname, "../public" );

//partials templets path 
const templete_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', templete_path);
hbs.registerPartials(partials_path)

app.use(express.static(static_path));



//routing
app.get("", (req, res)=>{ 
    res.render("index")
})

app.get("/weather",(req, res)=>{
    res.render("weather")
})

app.get("/about", (req, res)=>{
    res.render("about")
})

app.get("/tem", (req, res)=>{
    res.render("tem")
})

app.get("*", (req, res)=>{
    res.render("404error", {
        errorMsg: 'It looks like you enter a wrong URL'
    })
    
})

app.listen(port , () => {
    console.log(`listening at port on ${port}`)
})