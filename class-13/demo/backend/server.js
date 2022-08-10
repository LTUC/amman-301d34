'use strict';
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json())

// routes
app.get('/', handleHome);
app.get('/cat', handleGetCats);
app.get('/findCatbyName', handleFindCat);
app.post('/cat', createNewCat);
app.delete('/cat/:id', deleteCat);
app.put('/cat/:id', updateCat);
app.get('/cat/:id', findCatById);

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

// Find cat by id
function findCatById(req, res) {
    const id = req.params.id;
    CatModel.find({ "_id": id}, (error, data) => {
        if (error) console.log(`error finding the cat in the db: ${error}`);
        else res.send(data[0]);
    })   
}

//New cat function
function createNewCat(req, res) {
    // console.log(req.body);
    const {newCat} = req.body;
    // console.log(newCat)
    const cat = new CatModel(newCat);
    cat.save();
    console.log(cat)
    res.status(201).json(cat);
}

// Delete cat
function deleteCat(req, res) {
    // console.log(req.params.id)
    const id = req.params.id;
    CatModel.findByIdAndDelete(id).then(record => {
        res.send(record);
    }).catch(err => {
        console.log(err)
        res.status(500).send(err.message);
    })
}

// Update Cat
function updateCat(req, res) {
    const id = req.params.id;
    const {data} = req.body;

    CatModel.findByIdAndUpdate(id, data, {new: true}).then(record => {
        res.send(record);
    }).catch(err => {
        console.log(err)
        res.status(500).send(err.message);
    })
}


// Database Code
// sudo service mongodb start
// 1. connect my express server to the mongodb server using mongoose
mongoose.connect('mongodb+srv://waleed:waleed@cluster0.jm7r5bg.mongodb.net/?retryWrites=true&w=majority',
{
    useUnifiedTopology: true
});

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