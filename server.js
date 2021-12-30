require('dotenv').config();
const  { DATABASE_URL, PORT = 3001 }  = process.env;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const pantryController = require('./controllers/pantry');
const foodController = require('./controllers/food');



mongoose.connect(DATABASE_URL); 

mongoose.connection
    .on('open', () => console.log('Yup'))
    .on('close', () => console.log('See Ya'))
    .on('error', () => console.log('Nope'));


    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json({strict: false}));
    

    app.use('/', pantryController)
    app.use('/', foodController)

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", 'GET,PUSH,POST,DELETE,OPTIONS');
        next();
    });

        

 

// app.get('/', (req, res) => res.send('Dang ol yo man'));


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

