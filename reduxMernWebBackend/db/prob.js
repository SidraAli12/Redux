require('dotenv').config();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
const express = require('express');

const app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://sidraAli:77jLgJ7OL52yjeKI@cluster0.qebaged.mongodb.net/", {
    
    useNewUrlParser: true //FALTU KI WARNING SE BACHNE K LIYE
}).then(() => {
    console.log("Connection Successful")
}).catch((e)=>{
    console.log(e)
})