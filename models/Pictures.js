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
            required: [true,"You need to add your post date" ]
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

const Pictures = mongoose.model('2nds', picturesSchema);

// const pictures = [
//     {
//         caption: "I'm one month old today!",
//         date: "April 4, 2021",
//         image: "https://i.postimg.cc/2SwPXjrz/01.jpg"
//         // "https://drive.google.com/file/d/1M89LwyD9bG11bzdCCo_hdzNH64YTEN4E/view?usp=share_link"
//         //tinyurl links DO NOT work. must be regular url
//     },
//     {
//         caption: "Me and Mama",
//         date: "April 5, 2021",
//         image: "https://i.postimg.cc/C1PMyH0x/02.jpg"
//         // "https://drive.google.com/file/d/1eziVgwR2jFaMB028bQQPwAj855ACCQ92/view?usp=share_link",
//     },
//     {
//         caption: "Meet my sister, Kyda!",
//         date: "April 6, 2021",
//         image: "https://i.postimg.cc/Gt6ctLH0/03.jpg"
//         // "https://drive.google.com/file/d/1_bDtHQFL64KmC2qM61fW8hg3YDz2BuGh/view?usp=share_link",
//     },
//     {
//         caption: "Getting settled in my new home",
//         date: "May 2, 2021",
//         image: "https://i.postimg.cc/rwXVLwBx/04.jpg"
//         // "https://drive.google.com/file/d/1seXhucYqYBLWSntx-xuV6GUQdxMm8g0I/view?usp=share_link",
//     },
//     {
//         caption: "Loving my new bed!",
//         date: "May 3, 2021",
//         image: "https://i.postimg.cc/sfLfwcKn/05.jpg"
//         // "https://drive.google.com/file/d/1mlL6MSApPHCwyk0-fhNXOiSW3Om8bDUp/view?usp=share_link",
//     },
//     {
//         caption: "Going for a drive",
//         date: "May 4, 2021",
//         image: "https://i.postimg.cc/vH6YjVNG/06.jpg"
//         // "https://drive.google.com/file/d/15toAagyL4SbDeczusHUt6k5ZW_1jDwW1/view?usp=share_link",
//     },
//     {
//         caption: "My favorite dinner, spaghetti and meatballs!",
//         date: "May 5, 2021",
//         image: "https://i.postimg.cc/SRdv1Dbg/07.jpg"
//         // "https://drive.google.com/file/d/18JyeMXQ13YgZ7eoJZ5hXKr8HBYYdoBTG/view?usp=share_link",
//     },
//     {
//         caption: "Just a rainy car ride to the city",
//         date: "June 6, 2021",
//         image: "https://i.postimg.cc/xdmFV0SJ/08.jpg"
//         // "https://drive.google.com/file/d/1fWEvWnvdrO83Hs4lTzAsD0i9txmGTzVs/view?usp=share_link",
//     },
//     {
//         caption: "Reunited with my sister!",
//         date: "June 7, 2021",
//         image: "https://i.postimg.cc/nrFdmB9B/09.jpg"
//         // "https://drive.google.com/file/d/1E_3PnpNRVaylBCPjz-nPlfKIjvs1wI0h/view?usp=share_link",
//     },
//     {
//         caption: "My favorite place to hang out",
//         date: "July 14, 2021",
//         image: "https://i.postimg.cc/mDX9dH6Q/11.jpg"
//         // "https://drive.google.com/file/d/1zGcg7Yh4q55xVFQazlmmytNgYbB5_jio/view?usp=share_link",
//     },
//     {
//         caption: "Just a lazy Sunday",
//         date: "July 18, 2021",
//         image: "https://i.postimg.cc/R0CQX4Zx/12.jpg"
//         // "https://drive.google.com/file/d/1uvgb_Irpb4VEaPIc84d0jJeXdpD4p7Xq/view?usp=share_link",
//     },
//     {
//         caption: "Car naps are the best",
//         date: "July 19, 2021",
//         image: "https://i.postimg.cc/5NcBDw23/13.jpg"
//         // "https://drive.google.com/file/d/165K1sLpwLjyyUAGVkg6wUYOrmPb8x852/view?usp=share_link",
//     },
//     {
//         caption: "Playing hide and seek with mom.. do you think she sees me?",
//         date: "August 1, 2021",
//         image: "https://i.postimg.cc/2ynZCKSx/14.jpg"
//         // "https://drive.google.com/file/d/1rXzlk2SmFSZjDQZFyq7KvfL0QT9_kyYy/view?usp=share_link",
//     },
//     {
//         caption: "Road trips are my fave",
//         date: "August 2, 2021",
//         image: "https://i.postimg.cc/8CprNchj/15.jpg"
//         // "https://drive.google.com/file/d/1U1Pk2cJOMZupTVHxk_xMP7CiB9x7yxAc/view?usp=share_link",
//     },
    
// ];

module.exports = Pictures;