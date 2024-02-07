import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import user from './model/user.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://mokshmahajan2004:xui8KeYMtbTN58dU@cluster0.cywnbpd.mongodb.net/?retryWrites=true&w=majority').then(() => app.listen(5000)).then(() => console.log("Connected To Database and Listening to Localhost 5000")).catch((err) => console.log(err));

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
    const userData = new user({ name: req.body.name, email: req.body.email, branch: req.body.branch, year: req.body.year, event: "event1" });
    userData.save()
        .then(item => {
            res.send("Item saved to database");
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("Unable to save to database");
        });
});

app.post("/event2", function (req, res) {
    const userData = new user({ name: req.body.name, email: req.body.email, branch: req.body.branch, year: req.body.year, event: "event2" });
    userData.save()
        .then(item => {
            res.send("Item saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.post("/event3", function (req, res) {
    const userData = new user({ name: req.body.name, email: req.body.email, branch: req.body.branch, year: req.body.year, event: "event3" });
    userData.save()
        .then(item => {
            res.send("Item saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.post("/event4", function (req, res) {
    const userData = new user({ name: req.body.name, email: req.body.email, branch: req.body.branch, year: req.body.year, event: "event4" });
    userData.save()
        .then(item => {
            res.send("Item saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

