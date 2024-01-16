const mongoose=require('mongoose')

const connect =mongoose.connect('mongodb://127.0.0.1:27017/signUp');

const logschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    ,
    password:{
        type:String,
        required:true
    }
});

module.exports= new mongoose.model('user',logschema);