// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const Contact = require("./models/contacts.models");
  
import express from 'express';
const app = express();
import ContactRoutes from "./routes/contacts.routes.js";
import { contactdb } from './config/database.js';

//database connection
contactdb();




// // middleware
app.set("view engine",'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));


//routes
app.use("/",ContactRoutes)



app.listen(3000,()=>{
    console.log("🔥 port 3000 starting")
});