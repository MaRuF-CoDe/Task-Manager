require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('6206b01d6b5d9dd0b6565e5d', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const findAndUpdate = async (id,age) =>{
    const user = await User.findByIdAndUpdate (id,{ age })
    const count =  await User.countDocuments({ age })
    return count
}

findAndUpdate('6206b01d6b5d9dd0b6565e5d',2).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})