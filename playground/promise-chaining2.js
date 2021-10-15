require('../src/db/mongoose')
const Task = require ('../src/models/task')

//6169b0c5350dac33e45309d4

// Task.findByIdAndRemove('6169b0c5350dac33e45309d4').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const removeTaskAndCountUncomplete = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const notComplete = await Task.countDocuments({ completed: false})
    return notComplete
}

removeTaskAndCountUncomplete('6169b0c5350dac33e45309d4').then((count) =>{
    console.log(count)
}).catch((e) => {
    console.log(e)
})