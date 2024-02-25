import { Document, Schema, model, Types } from 'mongoose'

interface Training extends Document {
	id_user: Types.ObjectId;
	cost: Number;
	content: String;
	materials: String;
	place: String;
	name: String;
	type: String;
	photo: String,
	isActive: Boolean;
}

const TrainingSchema = new Schema<Training>({
	id_user: { type: Types.ObjectId, ref: 'Users' },
	cost: { type: Number, default: 0 },
	content: { type: String, default: '' },
	materials: { type: String, default: '' },
	place: { type: String, default: '' },
	name: { type: String, default: "" },
	type: { type: String, default: 'Training' },
	photo: String,
	isActive: { type: Boolean, default: true }
})

export default  model<Training>('Trainings', TrainingSchema, 'Trainings')
