require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('6206b01d6b5d9dd0b6565e5d', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})