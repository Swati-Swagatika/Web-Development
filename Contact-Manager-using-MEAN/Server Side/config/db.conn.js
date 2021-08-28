const mongoose = require('mongoose');
const config = require('./db.config');

const dbConn =()=>{
     mongoose.connect(config.uri,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},()=>{
        console.log('Connected to database');
    })
}

module.exports = dbConn