require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./Database/dbconnection');

const app = express();

// DB Connection
dbConnect();



app.get("/",(req,res)=>{
    res.send("Hello");
})


app.listen(process.env.PORT,()=>{
    console.log("Server on PORT "+process.env.PORT);
});


