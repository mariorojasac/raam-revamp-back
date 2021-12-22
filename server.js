require('dotenv').config();
const  { DATABASE_URL, PORT = 3001 }  = process.env;
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');


mongoose.connect(DATABASE_URL); 

mongoose.connection
.on('open', () => console.log('Yup'))
.on('close', () => console.log('See Ya'))
.on('error', () => console.log('Nope'));


app.get('/', (req, res) => {
    res.send('Hola Pendejos') ;
});


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));


