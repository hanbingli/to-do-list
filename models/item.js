const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date,  default: Date.now },
    tags: [
        {
			name: { type: String },
		}
    ],
    creator: { type: mongoose.Types.ObjectId, required: true,  ref: 'User' },
    completed: { type: Boolean, default: false }
    
});


module.exports = mongoose.model('Item', itemSchema);


