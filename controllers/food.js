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


// Delete Route
foodRouter.delete('/food/:id', async (req, res) => {
    try {
        res.json(await Food.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Update Route
foodRouter.put('/food/:id', async (req, res) => {
    try {
        res.json(await Food.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});



// Create Route
foodRouter.post('/food', async (req, res) => {
    try {
        res.json(await Food.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = foodRouter


