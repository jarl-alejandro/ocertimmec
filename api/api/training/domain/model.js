import mongoose from 'mongoose'

const TrainingSchema = new mongoose.Schema({
	id_user: { type: mongoose.Schema.ObjectId, ref: 'Users' },
	cost: { type: Number, default: 0 },
	content: { type: String, default: '' },
	materials: { type: String, default: '' },
	place: { type: String, default: '' },
	name: { type: String, default: "" },
	type: { type: String, default: 'Training' },
	photo: String,
	isActive: { type: Boolean, default: true }
})

const Trainings = mongoose.model('Trainings', TrainingSchema, 'Trainings')

export default Trainings
