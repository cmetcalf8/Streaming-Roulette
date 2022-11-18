const { Schema, model } = require('mongoose');

const favSchema = new Schema(
    {
        favName: {
            type: String,
            required: true,
        }
    }
);

const Fav = model('fav', favSchema);

module.exports = Fav;