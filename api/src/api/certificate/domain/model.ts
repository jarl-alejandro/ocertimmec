import mongoose from 'mongoose'

const CertificateSchema = new mongoose.Schema({
	id_user: { type: mongoose.Schema.ObjectId, ref: 'Users' },
	name: { type: String, default: "" },
	photo: String,
	cost: { type: Number, default: 0 },
	requirements: { type: String, default: '' },
	competition: { type: String, default: '' },
	competitionUnits: { type: String, default: '' },
	description: { type: String, default: '' },
	place: { type: String, default: '' },
	note: { type: String, default: '' },
	type: { type: String, default: 'Certificate' },
	uc: String,
	sector: String,
	isActive: { type:Boolean, default: true },
	squemaCode: { type: String },
})

const Certificate = mongoose.model('Certificate', CertificateSchema, 'Certificate')

export default Certificate
