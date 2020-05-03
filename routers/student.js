const express=require('express');
var router=express.Router();
var std=require('../controllers/student')

var passport=require('passport');


 
router.post('/addData',std.addstudent);




module.exports=router;