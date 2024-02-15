import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import user from './model/user.js';
import dotenv from 'dotenv';

dotenv.config({path:'./config.env'});
const DB=process.env.DATABASE;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB).then(() => app.listen(5000)).then(() => console.log("Connected To Database and Listening to Localhost 5000")).catch((err) => console.log(err));

app.get("/registrations", function (req, res) {
    try {
        user.find({}).then(function (allUsers) {
        res.send(allUsers);
    });
    } catch (error) {
        return res.status(400).json({
            status: "400",
            message: "Unable to Fetch Data"
        })
    }
});

app.post("/event1", function (req, res) {
    const userData = new user({ name: req.body.name, email: req.body.email, branch: req.body.branch, year: req.body.year, eventName: "event1" });

    user.find({eventName:"event1", email:req.body.email}).then(function(registeredUsers){
        console.log(registeredUsers);
        if(registeredUsers.length!=0){
                res.status(400).send("User already registered in this event");
        }
        else{
            userData.save()
            .then(item => {
                res.send("Item saved to database");
            })
            .catch(err => {
                console.log(err);
                res.status(400).send("Unable to save to database");
            });
        }});
});


app.post("/event2", function (req, res) {
    const userData = new user({ name: req.body.name, email: req.body.email, branch: req.body.branch, year: req.body.year, eventName: "event2" });
    
    user.find({eventName:"event2", email:req.body.email}).then(function(registeredUsers){
        console.log(registeredUsers);
        if(registeredUsers.length!=0){
                res.status(400).send("User already registered in this event");
        }
        else{
            userData.save()
            .then(item => {
                res.send("Item saved to database");
            })
            .catch(err => {
                console.log(err);
                res.status(400).send("Unable to save to database");
            });
        }});
});

app.post("/event3", function (req, res) {
    const userData = new user({ name: req.body.name, email: req.body.email, branch: req.body.branch, year: req.body.year, eventName: "event3" });
    
    user.find({eventName:"event3", email:req.body.email}).then(function(registeredUsers){
    console.log(registeredUsers);
    if(registeredUsers.length!=0){
            res.status(400).send("User already registered in this event");
    }
    else{
        userData.save()
        .then(item => {
            res.send("Item saved to database");
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("Unable to save to database");
        });
    }});
});

app.post("/event4", function (req, res) {
    const userData = new user({ name: req.body.name, email: req.body.email, branch: req.body.branch, year: req.body.year, eventName: "event4" });
    
    user.find({eventName:"event4", email:req.body.email}).then(function(registeredUsers){
        console.log(registeredUsers);
        if(registeredUsers.length!=0){
                res.status(400).send("User already registered in this event");
        }
        else{
            userData.save()
            .then(item => {
                res.send("Item saved to database");
            })
            .catch(err => {
                console.log(err);
                res.status(400).send("Unable to save to database");
            });
        }});
});

