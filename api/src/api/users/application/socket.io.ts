import fs from 'fs'
import path from 'path'
import User from '../domain/model'
import bcrypt from 'bcryptjs'

async function created (data, io) {
	const userDocument = new User({ ...data, password: 'occertimm' });
	const create = await userDocument.save();
	let pathFiles = path.join(__dirname, '..', '..', '..', 'media')

	if (data.photo) {
		create.photo = `${create._id}-${data.photo}`

		fs.writeFile(`${pathFiles}/${create.photo}`, data.photoFile, err => {
			if (err) console.log(err)
		})
	}

	create.save(err => {
		if (err) console.log(err)
		io.emit('created::user', create)
	})
}

async function updated(data, io) {
	let pathFiles = path.join(__dirname, '..', '..', '..', 'media')
	let updatedUser = await User.findByIdAndUpdate(data.id, { ...data }, { new: true })
	io.emit('updated::user')

	if (data.isPhoto) {
		fs.writeFile(`${pathFiles}/${updatedUser.photo}`, data.photoFile, err => {
			if (err) console.log(err)
		})
	}
}

async function deleted(data, io) {
	await User.findByIdAndUpdate(data.id, { isActive: false }, { new: true })
	io.emit('updated::user')
}

async function updatedPassword (data, io) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(data.password1, salt, async (err, hash) => {
			let updated = await User.findByIdAndUpdate(data.id, { password: hash }, { new: true })
		})
	})
}

function ioUser (socket, io) {
	socket.on('created::user', data => created(data, io))
	socket.on('updated::user', data => updated(data, io))
	socket.on('deleted::user', data => deleted(data, io))
	socket.on('updated::password', data => updatedPassword(data, io))
}

export default ioUser
