const express=require('express');
var router=express.Router();
var emp=require('../controllers/emp')
var passport=require('passport');

 
//router.post('emp/signup', emp.signup);
 
router.post('/signup', emp.signup);


 
router.use('/signin', function(req,res){

     console.log("we are into server of emp");
   res.render('signin.ejs', {

     

   })

});


router.get('/fail', function(req,res){
    console.log("fail");
    res.send("fail");
})


router.post('/userauth',passport.authenticate('local',{failureRedirect:'/fail'} ), function(req,res){

   console.log("Login In SucessFullly");
   res.cookie('meghraj', 2222);
   res.redirect('/');

});



 


 
 

 
router.get('/fail', function(req,res){
    console.log("fail");
    res.send("fail");
})




module.exports=router;