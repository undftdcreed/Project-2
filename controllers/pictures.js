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

router.get('/profile', (req,res) =>{
    res.render('profile.ejs')
})

router.get('/2nds/:id', (req,res) => {
    const singlePicture = pictures[req.params.id]
    res.render('show.ejs',{pictures:singlePicture, idx: req.params.id})
})
router.post('/pictures', (req, res)=>{
    pictures.push(req.body);
    console.log(req.body);
    res.redirect('/2nds');
})
router.get('/2nds/:id/edit', (req,res) => {
    const imageChanges = pictures[req.params.id];
    res.render(`edit.ejs`,{imageChanges, idx: req.params.id})

})
router.put('/pictures/:id', (req,res) => {
    const imageEdit=req.body;
    pictures[req.params.id]=imageEdit;
    res.redirect('/2nds')

})


router.get('/team', (req, res) => {
    res.render('team.ejs')
})








module.exports=router