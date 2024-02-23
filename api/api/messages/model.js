import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
	name: { type: String, default: "" },
	email: { type: String, default: "" },
	subject: { type: String, default: "" },
	message: { type: String, default: "" },
})

const Message = mongoose.model('Message', MessageSchema, 'Message')

export default Message
