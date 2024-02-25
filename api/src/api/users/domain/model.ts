import { Document, Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

interface UserDocument extends Document {
	cedula?: string,
	name?: string,
	email?: string,
	password?: string,
	photo?: string,
	roles?: string,
	workExperience?: string,
	levelInstruction?: string,
	teachingExperience?: string,
	trainingProfile?: string,
	trainingPedagogy?: string,
	isActive?: Boolean,
}

const UserSchema = new Schema<UserDocument>({
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

UserSchema.methods.comparePassword = function (password: string, done: any) {
	bcrypt.compare(password, this.password, function (err, isMatch) {
		done(err, isMatch)
	})
}


export default model<UserDocument>('Users', UserSchema, 'Users')
