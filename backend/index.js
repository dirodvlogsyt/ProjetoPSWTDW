const express = require('express');

const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Router = require('./src/routes');


app.use(express.json());
app.use(cors());


app.use('/user', Router);

mongoose.connect('mongodb+srv://rubenflorentino2:HKV5NO9DxhKI5mE1@cluster0.z2f4luk.mongodb.net/Projeto',{
});
 


app.listen(5000, ()=>{
    console.log('A rodar na porta 5000');
});