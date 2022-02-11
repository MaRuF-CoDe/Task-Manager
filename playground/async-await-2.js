require('../src/db/mongoose')
const Task = require('../src/models/task')

const deleteAndCount = async (id)=>{
    const iid = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({'completed':false})

    return count
}

deleteAndCount('6206960ea294a76915a0324b').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})