const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const res = require('express/lib/response');
const ejs=require('ejs');
const path = require('path');
const Photo = require('./models/Photo');
const methodOverride = require('method-override');
const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageController');

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
app.use(fileUpload());
app.use(methodOverride('_method',{
  methods:['POST','GET']
}));


//ROUTES (PHOTO)
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id',photoController.getPhoto);
app.put('/photos/:id',photoController.updatePhoto);
app.post('/photos', photoController.createPhoto );
app.delete('/photos/:id',photoController.deletePhoto);

//ROUTES (PAGE)
app.get('/about', pageController.getAboutPage);
app.get('/add',pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);


const port=3000;
app.listen(port,()=>{

});