const express = require('express')
const routes = require('./src/routes/crmRoutes')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
//mongoose connection

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser :true,
    useUnifiedTopology: true
})

//body-parser setup
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())


routes(app) //passing route function to express library
 
app.get('/', (request, response) => {
    response.send(`Your server is running at port ${port}`)
})


app.listen(port, () =>
    console.log(`your server is running on port ${port}`)
)
