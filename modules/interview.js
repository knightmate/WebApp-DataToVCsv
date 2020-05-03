const mongoose=require('mongoose');

var Schemainterview=mongoose.Schema({

   Company:{
        type:String,
        requir:true
    },
    Date:{
        type:Date,
        require:true,
    },
    Result:{
        type:String,
        enum: ["Pass", "Fail", "Hole","Didn't Attempt"] 
    
    },
  StdId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Student'
}


    

});


const Interview=mongoose.model('Interview',Schemainterview);
module.exports=Interview;
