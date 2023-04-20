const express=require(`express`);
const router = express.Router();
const pictures = require('../models/Pictures')

///Routes///
router.get('/', (req,res) => {
    res.render('home.ejs')
})


router.get('/2nds', async (req, res, next ) =>{
    try{
     const myGallery = await pictures.find({});
     console.log(myGallery);
    res.render('index.ejs',{pictures: myGallery})
    } catch(err){
        console.log(err);
        next();
    }
});

router.get('/2nds/new', (req,res) =>{
    res.render('new.ejs')
})

router.get('/profile', (req,res) =>{
    res.render('profile.ejs')
});

router.get('/2nds/:id', async (req,res, next) => {
    try{
        const singlePicture = await pictures.findById(req.params.id);
        res.render('show.ejs',{pictures: singlePicture})
    }catch(err){
        console.log(err)
    }
});

router.post('/pictures', async (req, res, next)=>{
    try{
        const addedImage = await pictures.create(req.body);
        console.log(addedImage)
        res.redirect('/2nds');
    }catch(err){
        console.log(err);
        next();

    }
});

router.get('/2nds/:id/edit', async (req, res, next) => {
    try{
        const imageChanges = await pictures.findById(req.params.id);
        res.render(`edit.ejs`,{pictures: imageChanges});
    }catch(err){
        console.log(err);
        next()

    }
});



router.put('/pictures/:id', async (req, res, next) => {
    try{
        const imageEdit=req.body;
        const editedImage = await pictures.findByIdAndUpdate(req.params.id)
        res.redirect(`/2nds/${req.params.id}`)

    }catch(err){
        console.log(err);
    }

});

router.get('/2nds/:id/delete', async (req, res, next) =>{
    try{
        const imageToDelete = await pictures.findById(req.params.id);
        res.render('delete.ejs', {pictures: imageToDelete})
    } catch(err){
        console.log(err)
        next();
    }
});

router.delete('/pictures/:id', async  (req,res) => {
    try{
       const deletedImage = await pictures.findByIdAndDelete(req.params.id);
        res.redirect(`/2nds`)
    } catch(err){
        console.log(err)
    }
});


router.get('/team', (req, res) => {
    res.render('team.ejs')
});








module.exports=router