const express = require('express')
require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.send('GET request are disabled')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently under maintanence')
// })


// const multer = require('multer')
// const upload = multer({
//     dest: 'images'
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('server is up on port ' + port);
})


//Relation between user and task

// const Task = require('./models/task')
// const User = require ('./models/user')

// const main = async () => {
    // const task = await Task.findById('6209ffa01d96f4514e1f74db').populate('owner').exec()
    // console.log(task.owner)

    // const user = await User.findById('6209f1354144c80992219a99').populate('tasks').exec()
    // console.log(user.tasks)
// }

// main()