'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(cors()); // middleware to allow cross-origin requests
const PORT = process.env.PORT || 3001;
const axios = require("axios");

// Routes:
app.get("/", handleHome);
app.get("/photos", handleSearch);


// Functions:
// GET http://localhost:8080/
function handleHome(req, res) {
    res.send("I am alive");
}



// GET http://localhost:8080/photos?photoName=pen
// GET https://api.unsplash.com/search/photos/?client_id=WKEUO575CtT7SIzPEcq2QkNFz3G3gOWag74Y6HO3tUM&query=computers
async function handleSearch(req, res) {
    const photoName = req.query.photoName;
    console.log(photoName);
    // send a req to the unsplash to get the photo data
    const url = `https://api.unsplash.com/search/photos/?client_id=${process.env.ACCESS_KEY}&query=${photoName}`;
    const photoRes = await axios.get(url);

    console.log(photoRes.data.results);

    let photoArr = photoRes.data.results.map(photoObject => {
        return new Photo(photoObject)
    }) ;


    res.send(photoArr);
    // I need to send photos of what the user is looking for

}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

class Photo {
    constructor(object) {
        this.image_url = object.urls.regular;
        this.name = object.user.name;
        this.description = object.alt_description;
    }
}

// 2:8