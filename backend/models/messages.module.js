const mongoose = require("mongoose");
const messagesSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	sessionId: {
		type: String,
		required: true,
	},
	userOwner: {
		type: Boolean,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
});

module.exports = messagesSchema;
