const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: [true,'must provide todo'],
        trim: true,
        maxlength: [75, 'todo can not be more than 75 characters']
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Todo',TodoSchema)