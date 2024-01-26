const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;

//MIDDLEWARE
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})

//PORT LISTENING CONFIGURATION
app.listen(PORT,()=>{console.log(`Listening to port ${PORT} :)`)})

//GET ROUTES
app.get('/',(req,res)=>{
    res.json({mssg:"welcome to the app" })
})
