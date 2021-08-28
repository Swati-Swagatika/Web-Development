const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    UserID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    contactname:{
        type:String,
        required:true
    },
    contactemail:{
        type:String,
        required:true
    },
    contactphone:{
        type:String,
        required:true
    },
    contacttype:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('contacts',ContactSchema);