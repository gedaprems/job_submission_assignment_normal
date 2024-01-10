require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./Database/dbconnection');
const mediaRoutes = require('./Routes/mediaRoutes');
const cors = require('cors');
const path = require('path');
const fs = require('fs');


const app = express();


// DB Connection
dbConnect();

// Liabraries Middleware
app.use(cors());
app.use("/public",express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:false}));

// app.set 

app.set('view engine','ejs');
app.set("views", path.resolve("./views"));


// routes define

app.use("/api/v1/media", mediaRoutes);

app.get("/",(req,res)=>{
    res.render('index');
})


app.listen(process.env.PORT,()=>{
    console.log("Server on PORT "+process.env.PORT);
});


