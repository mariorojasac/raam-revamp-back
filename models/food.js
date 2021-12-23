const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    img: { type: String },
    name: { type: String },
    description: { type: String },
    quantity: { type: String }

});

module.exports = mongoose.model('Food', foodSchema);
