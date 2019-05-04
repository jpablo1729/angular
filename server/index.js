const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.post('/api/register', (req, res) => {
    console.log(req.body)
    const {username, password} = req.body
    //Store in databas in future!
})

app.listen(1234, () => console.log('Server listening at 1234'))