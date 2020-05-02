const express=require('express');
var app=express();
const port=200;
var db=require('./config/mongoose');
var router=require('./routers');
var bodyparser=require('body-parser');
var multer=require('multer');

app.use(bodyparser.urlencoded());


app.post('/',router);

app.listen(port,function(err, server)
{

    console.log("server is running on "+port);
 

});


