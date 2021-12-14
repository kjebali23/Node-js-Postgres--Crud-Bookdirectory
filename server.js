const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const pool = require('./server/database/database');


//log requests 
app.use(morgan('tiny'));

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//parse request to body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//set view engine
app.set("view engine" , "ejs");

//load assets
app.use('/css' , express.static(path.resolve(__dirname,"assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));


//load routes 
app.use('/' , require("./server/routes/router"))


app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})