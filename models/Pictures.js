const mongoose = require('mongoose');
require('../config/connection'); // Connects configuration files to your database


const picturesSchema = new mongoose.Schema(
    {
        caption: {
            type: String,
            unique: true

        },
        date: {
            type: String,
            required: [true,"You need o add your post date" ]
        },
        image:{
            type: String,
            required: [true, "This is a picture app!Add a photo"],
        }

    },
    {
        timestamps: true

    }
);

const Pictures = mongoose.model('Photos', picturesSchema);



module.exports = Pictures;