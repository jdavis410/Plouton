const express = require('express');
const app = express();

const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});