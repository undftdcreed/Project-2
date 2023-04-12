const mongoose = require('mongoose');
require('../config/connection'); // Connects configuration files to your database

const pictures = [
    {
        caption: "I'm one month old today!",
        date: "April 4, 2021",
        image: "./public/png_images/onemonthold.png",
    },
    {
        caption: "Me and Mama",
        date: "April 5, 2021",
        image: "https://drive.google.com/file/d/1eziVgwR2jFaMB028bQQPwAj855ACCQ92/view?usp=share_link",
    },
    {
        caption: "Meet my sister, Kyda!",
        date: "April 6, 2021",
        image: "https://drive.google.com/file/d/1_bDtHQFL64KmC2qM61fW8hg3YDz2BuGh/view?usp=share_link",
    },
    {
        caption: "Getting settled in my new home",
        date: "May 2, 2021",
        image: "https://drive.google.com/file/d/1seXhucYqYBLWSntx-xuV6GUQdxMm8g0I/view?usp=share_link",
    },
    {
        caption: "Loving my new bed!",
        date: "May 3, 2021",
        image: "https://drive.google.com/file/d/1mlL6MSApPHCwyk0-fhNXOiSW3Om8bDUp/view?usp=share_link",
    },
    {
        caption: "Going for a drive",
        date: "May 4, 2021",
        image: "https://drive.google.com/file/d/15toAagyL4SbDeczusHUt6k5ZW_1jDwW1/view?usp=share_link",
    },
    {
        caption: "My favorite dinner, spaghetti and meatballs!",
        date: "May 5, 2021",
        image: "https://drive.google.com/file/d/18JyeMXQ13YgZ7eoJZ5hXKr8HBYYdoBTG/view?usp=share_link",
    },
    {
        caption: "Selling my first house",
        date: "June 5, 2021",
        image: "https://drive.google.com/file/d/1u9mH_vJvinThqZ6p6AQCM5YTHm71cOgN/view?usp=share_link",
    },
    {
        caption: "Just a rainy car ride to the city",
        date: "June 6, 2021",
        image: "https://drive.google.com/file/d/1fWEvWnvdrO83Hs4lTzAsD0i9txmGTzVs/view?usp=share_link",
    },
    {
        caption: "Reunited with my sister!",
        date: "June 7, 2021",
        image: "https://drive.google.com/file/d/1E_3PnpNRVaylBCPjz-nPlfKIjvs1wI0h/view?usp=share_link",
    },
    {
        caption: "My favorite place to hang out",
        date: "July 14, 2021",
        image: "https://drive.google.com/file/d/1zGcg7Yh4q55xVFQazlmmytNgYbB5_jio/view?usp=share_link",
    },
    {
        caption: "Just a lazy Sunday",
        date: "July 18, 2021",
        image: "https://drive.google.com/file/d/1uvgb_Irpb4VEaPIc84d0jJeXdpD4p7Xq/view?usp=share_link",
    },
    {
        caption: "Car naps are the best",
        date: "July 19, 2021",
        image: "https://drive.google.com/file/d/165K1sLpwLjyyUAGVkg6wUYOrmPb8x852/view?usp=share_link",
    },
    {
        caption: "Playing hide and seek with mom.. do you think she sees me?",
        date: "August 1, 2021",
        image: "https://drive.google.com/file/d/1rXzlk2SmFSZjDQZFyq7KvfL0QT9_kyYy/view?usp=share_link",
    },
    {
        caption: "Road trips are my fave",
        date: "August 2, 2021",
        image: "https://drive.google.com/file/d/1U1Pk2cJOMZupTVHxk_xMP7CiB9x7yxAc/view?usp=share_link",
    },
    
];

module.exports = pictures;