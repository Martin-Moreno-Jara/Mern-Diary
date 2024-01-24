const express = require('express');
const app = express();
const PORT = 4000;

//PORT LISTENING CONFIGURATION
app.listen(PORT,()=>{console.log(`Listening to port ${PORT} :)`)})