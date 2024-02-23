import mongoose from 'mongoose'

const PlanningSchema = new mongoose.Schema({
	rel: { type: String, default: '' },
	date: { type: String, default: '' },
	hour: [String]
})

const Planning = mongoose.model('Planning', PlanningSchema, 'Planning')

export default Planning
