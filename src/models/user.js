const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required : true,
        trim : true
    },
    email:{
        type : String,
        required: true,
        trim : true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error('Email is invalid')
            }
        }
    },
    password:{
        type: String,
        required : true,
        minlength : 7,
        trim : true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new error('Password can not contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default : 0,
        validate (value){
            if(value<0){
                throw new error('Age must be in positive number')
            }
        }
    }
})

module.exports = User