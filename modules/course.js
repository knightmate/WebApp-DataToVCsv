const mongoose=require('mongoose');

var Schemacourse=mongoose.Schema({

   DSA:{
        type:String,
        require:true
    },
    Web:{
        type:String,
        require:true,
    },
    React:{
        type:String,
        enum: ["Placed", "NotPlaced"] 
    
    },
    stdId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }





});


const Course=mongoose.model('Course',Schemacourse);
module.exports=Course;
