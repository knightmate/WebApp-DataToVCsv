 var Dbemp=require('../modules/employee');

 module.exports.signup=function(req,res){


    console.log("server into signup");
    
    Dbemp.create({

        email:req.body.email,
        password:req.body.password,
        designation:req.body.designation,
      
        
    }, function(err,user){

        if(err)
        {
            console.log(err);
            res.send(err);
        }else

        console.log(user);
        res.redirect('/emp/signin');

    })


}