require('dotenv').config();
const  { PORT = 3001 }  = process.env;
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');


// mongoose.connect(DATABASE_URL); 


app.get('/', (req, res) => {
    res.send('Hola Pendejos') ;
});


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));


