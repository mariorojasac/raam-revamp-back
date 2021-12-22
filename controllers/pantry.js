const express = require('express');
const Router = express.Router();
const Pantry = require('../models/pantry');

// Index Route
Router.get('/pantry', async (req, res) => {
    try {
        res.json(await Pantry.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});


// Create Route 
Router.post('/pantry', async (req, res) => {
    try{
        res.json(await Pantry.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
    
});

module.exports = Router