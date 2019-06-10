const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

mongoose.Promise = Promise
mongoose.connect('mongodb://127.0.0.1:27017/angulardb').then(()=>console.log('Mongoose up now'))

const User = require('./models/users')

app.use(bodyParser.json())

app.post('/api/login', async (req, res) => {
    const {email, password} = req.body
    console.log(email, password)
    const resp = await User.findOne({email, password})
    console.log(resp)
    if(!resp) {
        console.log("Incorrect details")
        res.json({
            success: false,
            secret: "Incorrect details" 
        })
    } else {
        console.log("Login you in")
        res.json({
            success: true
        })
    }
    res.send("to test!")
})

app.post('/api/register', async (req, res) => {
    const {email, password} = req.body

    const existingUser = await User.findOne({email})

    if (existingUser) {
        res.json({
            success: false,
            message: "Email already in use"
        })
        return
    }

    console.log(req.body)
    const user = new User({
        email,
        password
    }) 

    const result = await user.save()
    console.log(result)
    res.json({
        success: true,
        message: "Welcome"
    })
   
})

app.listen(1234, () => console.log('Server listening at 1234'))