var dbstudent=require('../modules/student');
var dbinterview=require('../modules/interview');
var dbcourse=require('../modules/course');



module.exports.addstudent=function(req,res)
{

    console.log("into addstudent controller");
    console.log(req.body);

    const{name,college,status,dsa,webd,company, react, date,interview}=req.body;
    dbstudent.create({
       
        name:name,
        college:college,
        status:status,
        
        
    }, function(err, response){


        if(err)
        {
            console.log(err);
            res.send(err);
        } 



            dbcourse.create({
               
                Dsa:dsa,
                Web:webd,
                React:react,
                StdId:response._id
                
             
                
            }, function(err,courseres){

                if(err)
                {
                    console.log('err in course');
                    console.log(err);
                    res.send(err);

                }
                   console.log("course data added");
                    
                    dbinterview.create({
                     
                        Company:company,
                        Date:date,
                        Result:interview,
                        StdId:response._id

                    }, function(err, interviewres){
                       
                        if(err)
                        {
                            console.log("err in interview");
                            console.log(err);
                        }
                        else{

                            console.log("all data added");

                            console.log(interviewres);

                            res.redirect('/');
                        }
                       
                        
                    })


                

            })


            
        
       


    })



}