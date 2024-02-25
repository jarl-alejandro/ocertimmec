import { Document, Schema, model, Types } from 'mongoose'

export interface Planning extends Document {
	_id: Types.ObjectId;
	rel: String,
	date: String,
	hour: String[]
}

const PlanningSchema = new Schema<Planning>({
	rel: { type: String, default: '' },
	date: { type: String, default: '' },
	hour: [String]
})

const Planning = model<Planning>('Planning', PlanningSchema, 'Planning')

export default Planning
