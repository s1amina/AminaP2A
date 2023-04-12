const mongoose = require('mongoose')

const { Schema, model } = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Todo', schema)