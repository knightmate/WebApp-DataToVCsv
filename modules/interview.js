const mongoose=require('mongoose');

var Schemainterview=mongoose.Schema({

   company:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true,
    },
    Result:{
        type:String,
        enum: ["Pass", "Fail", "Hole","Didn't Attempt"] 
    
    },
  stdId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Student'
}


    

});


const Interview=mongoose.model('Interview',Schemainterview);
module.exports=Interview;
