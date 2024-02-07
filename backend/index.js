const express = require('express');

const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Router = require('./src/routes');


app.use(express.json());
app.use(cors());


app.use('/user', Router);

mongoose.connect('mongodb://localhost:27017/Projeto',{
});
 


app.listen(3000, ()=>{
    console.log('A rodar na porta 3000');
});