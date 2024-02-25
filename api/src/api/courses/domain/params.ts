import { Document, Schema, model } from 'mongoose'

interface Params extends Document {
	name: string;
	counter: string;
}

const paramsSchema = new Schema<Params>({
	name: { type: String, default: '' },
	counter: { type: Number, default: 0 },
})

const Params = model<Params>('Params', paramsSchema, 'Params')

export default Params
