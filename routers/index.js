const express=require('express');
var router=express.Router();
const Json2csvParser = require("json2csv").Parser;
const fs = require("fs");
var passport=require('passport');
var local=require('../config/passport-local');
var dbstudent=require('../modules/student');
var dbinterview=require('../modules/interview');
var dbcourse=require('../modules/course');
var controller=require('../controllers/buildcsv');





router.use('/emp',require('./emp'));
router.use('/student', require('./student'));

router.get('/download', function(req,res){
   
  console.log(req.body);
  
  res.download('/Users/meghrajdeshmukh/Desktop/WebDevelopment/node/Codingninjas CSV(Mock5)/output.csv',function(err, completed){
      if(err)
      {
          console.log(err);
      }
      else{
         
        console.log(completed);
        
      }
  })



});


router.use('/', passport.checkAuthentication, function(req,res){
    console.log("user is logged in dude");
var interview=null;
var storyobj=null;
   
    dbinterview.find({}, function(err, interviewres){
        
       // console.log(interviewres);
         interview=interviewres;

    })

       dbcourse.find({}).
  populate('StdId'). // only return the Persons name
  exec(function (err, story) {
    if (err) return handleError(err);

     //console.log(story);
     storyobj=story;

      
   
     
     
     const data =story;
     
     const json2csvParser = new Json2csvParser({ header: true });

     var names=["Dsa","Web", "React","StdId"];

    controller.createcsv(story);

    /* for(o of data)
     {

        console.log(o);

            var csv=""+o;
        fs.writeFile("student.csv", csv, function(error) {
            if (error) throw error;
            console.log("student.csv successfully!");
          });   
          //console.log(o);
          
           for(let i=0;i<names.length;i++)
            { 

                console.log("obj"+o[names[i]]);
            var csv=names[i]+"-"+ o[names[i]];
            
              // csvData+=""+o['StdId']

 
              // console.log(o[names[i]]); 

            
             
            
        console.log();
  
            }
    */
          
       
       
         

     
    






 



     res.render('home.ejs', {
 
         interview:interview,
         story:storyobj,
 
 
     });   




  });
      
   
} )
 

  
module.exports=router; 