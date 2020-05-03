const express=require('express');
var app=express();
const port=200;
var db=require('./config/mongoose');
var router=require('./routers');
var bodyparser=require('body-parser');
var multer=require('multer');
var passport=require('passport');
var cookie=require('cookie-parser');
var path=require('path');

app.use(bodyparser.urlencoded());
app.use(cookie());

app.use(passport.initialize());
app.use(passport.session());

 
 
//static files
//app.use(express.static('./asset'));
app.use(express.static(path.join(__dirname, 'asset')));

//view engine , ejs
app.set('view engine','ejs');
app.set('views','./views');



app.use('/',router);
app.listen(port,function(err, server)
{

    console.log("server is running on "+port);
 

});


