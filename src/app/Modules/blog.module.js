const mongoose = require('mongoose');
const { Schema } = mongoose;

const Blog = new Schema(
    {
        title: { type: String, required: true, default: '', maxlength: 60 },
        subtitle: { type: String, required: false, default: '' },
        content: { type: String, default: '', required: true },
        imageUrl: { type: String, default: '', }

    }, { timestamps: true });

module.exports = mongoose.model('blog', Blog);
