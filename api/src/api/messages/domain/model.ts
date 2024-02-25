import { Document, Schema, model } from 'mongoose'

interface Message extends Document {
	name: string,
	email: string,
	subject: string,
	message: string,
}

const MessageSchema = new Schema<Message>({
	name: { type: String, default: "" },
	email: { type: String, default: "" },
	subject: { type: String, default: "" },
	message: { type: String, default: "" },
})

export default model<Message>('Message', MessageSchema, 'Message')
