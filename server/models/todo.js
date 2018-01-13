var mongoose = require('mongoose')


var schema = new mongoose.Schema({
    todo:{ type: String, required: true },
    completed:{ type: Boolean, required: true }
})


module.exports = mongoose.model('Todo', schema)