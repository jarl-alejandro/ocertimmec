import {Document, Schema, model, Types, PopulatedDoc} from 'mongoose'
import {UserDocument} from "../../users/domain/model";

export interface Training extends Document {
	_id: Types.ObjectId;
	id_user: PopulatedDoc<UserDocument & Document>,
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
