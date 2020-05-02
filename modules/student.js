const mongoose=require('mongoose');

var Schemastudent=mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    college:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        enum: ["Placed", "NotPlaced"] 
    
    }




});


const Student=mongoose.model('Student',Schemastudent);
module.exports=Student;
