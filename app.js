const express = require('express');
const mongoose = require('mongoose');
const res = require('express/lib/response');
const ejs=require('ejs');
const path = require('path');
const Photo = require('./models/Photo');



const app = express();

//connect DB
mongoose.connect('mongodb://localhost:27017/pcat-test-db');



//TEMPLATE ENGINE
app.set("view engine","ejs");
//Burada temlate engıne olarak ejs kullanacagımızı belirtiyouz.



//MIDDLEWARE

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//ROUTES

app.get('/photos/:id',async (req,res)=>{
  const photo = await Photo.findById(req.params.id)
  res.render('photo',{
    photo
  })
});


app.get('/',async (req,res)=>{
  const photos = await Photo.find({})
  res.render('index',{
    photos
  });
});

app.get('/about',(req,res)=>{
  // res.sendFile(path.resolve(__dirname,'temp/index.html'));
  res.render('about')
})


app.get('/add',(req,res)=>{
  // res.sendFile(path.resolve(__dirname,'temp/index.html'));
  res.render('add')
})

app.post('/photos', (req,res)=>{
   Photo.create(req.body)
  res.redirect('/');
  
});

const port=3000;
app.listen(port,()=>{

});