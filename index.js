const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

//controllers
const productsController = require('./controllers/products_controller');

//destructed variables from .env
const {
     PORT,
      CONNECTION_STRING,
     } = process.env;

const app = express();


app.use( bodyParser.json() );


massive(CONNECTION_STRING).then((dbInstance) => {
        app.set('db', dbInstance);
    })
    .catch((err) => {
        console.error(err);
    });

app.get('/api/products', productsController.getAll);
app.get('/api/products/:id', productsController.getOne);
app.put('/api/products/:id', productsController.update);
app.post('/api/products', productsController.create);
app.delete('/api/products/:id', productsController.delete);
 
app.listen(PORT, () => console.log(`server is running on:   ${PORT}`));

