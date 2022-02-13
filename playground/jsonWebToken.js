const jwt = require('jsonwebtoken')

const myFunction = async()=>{
    const token = jwt.sign({_id : 'abc123'},'thisismy',{expiresIn : '7 days'})

    console.log(token)

    const data = jwt.verify(token,'thisismy')
    console.log(data)
}

myFunction()