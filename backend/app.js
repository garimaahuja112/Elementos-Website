import express from 'express';
import mongoose from 'mongoose';
const app=express();

mongoose.connect('mongodb+srv://mokshmahajan2004:xui8KeYMtbTN58dU@cluster0.cywnbpd.mongodb.net/?retryWrites=true&w=majority').then(()=>app.listen(5000)).then(()=>console.log("Connected To Database and Listening to Localhost 5000")).catch((err)=>console.log(err));

