const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');


const app = express();


app.use(express.json());
app.use('/api/',auth);

//connect mongoose
mongoose.connect('mongodb+srv://apirfan33:qrscanner@cluster0.39by5zp.mongodb.net/?retryWrites=true&w=majority')



app.listen(3000,function(){
    console.log('listen port 3000')
})