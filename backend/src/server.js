const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect('mongodb://localhost:27017/Accounts.users',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
 
app.get('/', (req, res) =>{
    res.send('Boa tarde!');
});

app.listen(3000, ()=>{
    console.log('A rodar na porta 3000');
});ze