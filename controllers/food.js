const express = require('express');
const foodRouter = express.Router();
const Food = require('../models/food');


// Index Route 
foodRouter.get('/food', async (req, res) => {
    try {
        res.json(await Food.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

