const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;
const entryRoutes = require('./routes/entry');

//MIDDLEWARE
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})

//PORT LISTENING CONFIGURATION
app.listen(PORT,()=>{console.log(`Listening to port ${PORT} :)`)})

//ROUTER USE
app.use('/api/entry',entryRoutes);
