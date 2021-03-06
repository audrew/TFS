const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


//db config
const db = require('./config/keys').MangoURI;

//connect to mongo
mongoose
   .connect(db)
   .then(err => console.log('MangoDB connected...'))
   .catch(err => console.log(err));

   const port = process.env.PORT || 5000;

   app.listen(port, () => console.log('Server started on port ${port}'));
