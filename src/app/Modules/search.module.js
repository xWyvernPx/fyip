const mongoose = require('mongoose');
const { Schema } = mongoose;

const Search = new Schema(
    {
        title: { type: String, required: true, default: '' },
        content: { type: String, default: '' },
        isCompleted: { type: Boolean, required: true, default: false },
        createAt: { type: Date, default: Date.now },
        completeAt: { type: Date, default: Date.now },
    });

module.exports = mongoose.model('search', Search);
