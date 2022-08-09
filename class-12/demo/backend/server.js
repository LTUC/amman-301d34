'use strict';
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

// routes
app.get('/', handleHome);
app.get('/cats', handleGetCats);
app.get('/findCatbyName', handleFindCat);

// handlers functions:
function handleHome(req, res) {
    res.send('Hello World!');
}
// when I receive a req from react app on "http://localhost:3001/cats", the handleGetCats will be called
function handleGetCats(req, res) {
    // send a req to the mongoDB server to recive the cats data
    CatModel.find({}, (error, data) => {
        if (error) console.log(`error reading from the db: ${error}`);
        else res.send(data);
    })
}
// http://localhost:3001/findCatbyName?name=tomas&isAdopted=true
function handleFindCat(req, res) {
    const catName = req.query.name;
    const isAdopted = req.query.isAdopted;

    CatModel.find({ "name": catName, "isAdopted": isAdopted }, (error, data) => {
        if (error) console.log(`error finding the cat in the db: ${error}`);
        else res.send(data);
    })    
}


// Database Code
// sudo service mongodb start
// 1. connect my express server to the mongodb server using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/catsDB');

// 2. create a schema for the data I want to store in the database
const catsShema = new mongoose.Schema({
    // filed name : data type of this field
    name: String,
    age: Number,
    isAdopted: Boolean
});

// 3. create a model for the schema
const CatModel = mongoose.model('CatModel', catsShema);

const tomas = new CatModel({
    name: 'Tomas',
    age: 1,
    isAdopted: true
});

const april = new CatModel({
    name: 'April',
    age: 3,
    isAdopted: true
})

console.log(tomas);
// save to the db
// tomas.save();
// april.save();


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})