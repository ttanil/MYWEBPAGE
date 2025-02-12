//const mongoose=require('mongoose')
const mongoose = require('mongoose');
const dotenv=require('dotenv')
dotenv.config()


const conn=()=>{
    mongoose.connect(process.env.DB_URL,{
        dbName:'kasapzakir'
    }).then(()=>{
        console.log('DB connected')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = conn



  
/*
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true })  
    .then(() => console.log('MongoDB Connected'))  
    .catch(err => console.error('MongoDB connection error:', err));
    */