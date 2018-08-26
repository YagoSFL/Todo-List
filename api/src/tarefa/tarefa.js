const restful = require('node-restful')
const mongoose = restful.mongoose

const tarefaSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.now},
    concludedAt: {type: Date, required: false, default: "2013-11-18T06:55:00-05:00"}
})

module.exports = restful.model('Tarefa', tarefaSchema)