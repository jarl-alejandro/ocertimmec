import {Document, Schema, model, Types} from 'mongoose'

export interface Params extends Document {
	_id: Types.ObjectId;
	name: string;
	counter: Number;
}

const paramsSchema = new Schema<Params>({
	name: { type: String, default: '' },
	counter: { type: Number, default: 0 },
})

const Params = model<Params>('Params', paramsSchema, 'Params')

export default Params
