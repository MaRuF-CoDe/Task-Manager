require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('620696f50fe2d2056d438d8a').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})