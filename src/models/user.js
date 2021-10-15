const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('EMail is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error('Passowrd cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value <0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})


// const me = new User({
//     name: '  Klevis  ',
//     email: 'MYEMIAL@MED.IO',
//     password: '  phone098 '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error => {
//     console.log('Error!', error)
// }))

module.exports = User