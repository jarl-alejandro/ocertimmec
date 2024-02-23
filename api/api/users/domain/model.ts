import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
	cedula: String,
	name: String,
	email: {
		type: String,
		unique: true,
		default: ''
	},
	password: { type: String, default: 'occertimm' },
	photo: String,
	roles: String,
	workExperience: String,
	levelInstruction: String,
	teachingExperience: String,
	trainingProfile: String,
	trainingPedagogy: String,
	isActive: { type: Boolean, default: true }
})


UserSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next()
	}

	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(this.password, salt, (err, hash) => {
			this.password = hash
			next()
		})
	})
})

UserSchema.methods.comparePassword = function (password, done) {
	bcrypt.compare(password, this.password, function (err, isMatch) {
		done(err, isMatch)
	})
}


const Users = mongoose.model('Users', UserSchema, 'Users')

export default Users
