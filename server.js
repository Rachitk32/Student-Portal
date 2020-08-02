//packages 
const express = require('express');
const app= express();
const bodyParser = require('body-parser')
app.set('view engine','pug');
app.set('views',__dirname+'/views')

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))


//routes 

//loginpage
app.get('/',function(req,res)
{
    res.render('loginPage.pug');
})

//checkData
app.post('/checkData',function(req,res)
{
    console.log(req.body.email + '\n' + req.body.pwd);
    //here we will confirm data 
    //if info is correct the redirect to homepage
        res.render('homepage');
    /*else 
        send some info to indicate that data is wrong and to reenter details
        1.display info or message of some kind 
        2.focus on the element that is wrong.
    */
})


app.listen("3000",function(req,res)
{
    console.log("Server started");
});