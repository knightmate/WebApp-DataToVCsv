const express=require('express');
var router=express.Router();

var passport=require('passport');
var local=require('../config/passport-local');



router.use('/emp',require('./emp'));


router.use('/', passport.checkAuthentication, function(req,res){
    console.log("user is logged in dude");
    res.render('home.ejs', {

    });
} )
 

  
module.exports=router; 