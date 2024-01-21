const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://prashant:RbZhgAXkd1YF9O9I@prashant-cluster.a3uiuae.mongodb.net/todo-app')


const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todosSchema)

module.exports = {
    todo
}