const express=require(`express`);
const router = express.Router();
const pictures = require('../models/Pictures')

///Routes///
router.get('/', (req,res) => {
    res.render('home.ejs')
})


router.get('/2nds', (req,res) =>{
    res.render('index.ejs',{pictures})

})
router.get('/2nds/new', (req,res) =>{
    res.render('new.ejs')
})

router.get('/2nds/:id', (req,res) => {
    const singlePicture = pictures[req.params.id]
    res.render('show.ejs',{pictures:singlePicture})
})








module.exports=router