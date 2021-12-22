const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pantrySchema = new Schema({
    img: { type: String },
    location: { type: String},
    description: { type: String }
});


module.exports = mongoose.model('Pantry', pantrySchema);