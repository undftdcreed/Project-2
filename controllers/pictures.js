const express=require(`express`);
const router = express.Router();
const pictures = require('../models/Pictures')

///Routes///

router.get('', (req,res) =>{
    res.render('index.ejs')
})
router.get('/new', (req,res) =>{
    res.render('new.ejs')
})

router.get('/:id', (req,res) => {
    const singlePicture = pictures[req.params.id]
    res.render('show.ejs')
})








module.exports=router