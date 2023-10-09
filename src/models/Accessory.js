const mongoose = require('mongoose');

const accessorySchema = mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;