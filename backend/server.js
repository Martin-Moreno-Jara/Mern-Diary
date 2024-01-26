const express = require('express');
const app = express();
const PORT = 4000;

//PORT LISTENING CONFIGURATION
app.listen(PORT,()=>{console.log(`Listening to port ${PORT} :)`)})

//GET ROUTES
app.get('/',(req,res)=>{
    res.json({mssg:"welcome to the app" })
})