const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

//destructed variables from .env
const {
     PORT,
      CONNECTION_STRING,
     } = process.env;

const app = express();

massive(CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance);
    })
    .catch((err) => {
        console.error(err);
    });

app.use( bodyParser.json() );
app.use( cors() );

 
app.listen(PORT, () => console.log(`server is running on:   ${PORT}`));

