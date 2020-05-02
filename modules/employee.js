var mongoose=require('mongoose');

var SchemaEmp=mongoose.Schema({

    email:{
        type:String,
        require:true,

    },
    designation:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }


});


var Emp=mongoose.model('Emp', SchemaEmp);
module.exports=Emp;



