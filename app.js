const express = require('express');
const res = require('express/lib/response');
const ejs=require('ejs');
const path = require('path');

const app = express();



//TEMPLATE ENGINE
app.set("view engine","ejs");
//Burada temlate engıne olarak ejs kullanacagımızı belirtiyouz.



//MIDDLEWARE

app.use(express.static('public'));

//ROUTES

app.get('/',(req,res)=>{
  // res.sendFile(path.resolve(__dirname,'temp/index.html'));
  res.render('index')
})

app.get('/about',(req,res)=>{
  // res.sendFile(path.resolve(__dirname,'temp/index.html'));
  res.render('about')
})


app.get('/add',(req,res)=>{
  // res.sendFile(path.resolve(__dirname,'temp/index.html'));
  res.render('add')
})




 


const port=3000;
app.listen(port,()=>{

});