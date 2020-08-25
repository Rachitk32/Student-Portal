//MODULES AND VARIABLES

var express = require('express')
var app = express()
var bodyParser=require('body-parser');
var cookieparser=require('cookie-parser');

var array=[{
  email:"admin@admin.com",
  pass:"admin"
}]

var curruser={};

//MIDDLEWARES
app.use(express.static(__dirname+'/static'));
app.use(bodyParser.urlencoded({ extended: true })); 
//ROUTES

app.get('/',function(req,res)
  {
    console.log("website opened ")
    res.sendFile(__dirname+ "/static/html/loginindex.html");  
})

app.post('/logincheck',function(req,res)
{
  console.log("login requeset recieved")
  console.log(req.body);
  var flag=false;
  for(let i =0;i<array.length;i++)
    if(array[i].email==req.body.email && array[i].pass===req.body.pwd)
      {console.log("right credentials");
       flag=true; 
       curruser=array[i];
       break;
      }
    if(flag==true)
      res.redirect('/homepage');
    else 
      res.send("Wrong Details");
})

app.post('/signupcheck',function(req,res)
{
  console.log("signup request recieved")
  console.log(req.body);
  array.push({email:req.body.email,pass:req.body.pwd})
  for(let i =0;i<array.length;i++)
      console.log(array[i].email + ": " + array[i].pass);
  res.redirect("/");  
})

app.get('/homepage',function(req,res)
{
 res.sendFile(__dirname+"/static/html/mainindex.html");   
})

app.listen(3000,function()
{
  console.log("Server Started");
});
  

