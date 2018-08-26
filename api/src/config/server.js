const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const port = 3333
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors())

mongoose.connect('mongodb://localhost:27017/tarefas', {useNewUrlParser: true})
require('../tarefa/tarefa')

server.listen(port, function() {
    console.log(`Server is running on port ${port}`)
})

module.exports = server