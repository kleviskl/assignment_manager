require('../src/db/mongoose')
const User = require ('../src/models/user')

//6168a54b985b200d009dedf3

// User.findByIdAndUpdate('6168a74443fec61ba413d574', { age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('6168a54b985b200d009dedf3', 2).then((count) =>{
    console.log(count)
}).catch((e) => {
    console.log(e)
})