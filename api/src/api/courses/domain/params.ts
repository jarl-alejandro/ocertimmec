import mongoose from 'mongoose'

const paramsSchema = new mongoose.Schema({
	name: { type: String, default: '' },
	counter: { type: Number, default: 0 },
})

const Params = mongoose.model('Params', paramsSchema, 'Params')

export default Params
