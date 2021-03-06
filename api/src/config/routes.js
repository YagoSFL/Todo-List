const express = require('express')

module.exports = function(server) {

    //API routes
    const router = express.Router()
    server.use('/api', router)

    //TODO routes
    const todoService = require('../tarefa/servicoTarefa')
    todoService.register(router, '/tarefas')
}