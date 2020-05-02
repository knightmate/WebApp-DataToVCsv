var mongoose=require('mongoose');

var SchemaEmp=mongoose.Schema({

    name:{
        type:String,
        require:true,

    },
    designation:{
        type:String,
        require:true,
    },
    password:{
        type:password,
        require:true,
    }


});


var Emp=mongoose.model('Emp', SchemaEmp);
module.exports=Emp;



