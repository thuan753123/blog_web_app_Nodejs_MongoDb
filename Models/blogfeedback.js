const mongoose = require('mongoose');

const blogfbSchema = new mongoose.Schema({
    name: String,
    email: String,
    title: String,
    note: String
}); 

module.exports = mongoose.model("blogfeedback", blogfbSchema);