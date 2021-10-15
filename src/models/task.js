const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    }, 
    completed: {
        type: Boolean,
        default: false,
        required: false
    }
})

module.exports = Task

// const tk = new Task({
//     description: '  Eat lunch',
    
// })

// tk.save().then(() => {
//     console.log(tk)
// }).catch((error) => {
//     console.log(error)
// })