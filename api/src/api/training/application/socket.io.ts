import fs from 'fs'
import path from 'path'
import Trainings from '../domain/model'

async function created (data, io) {
	const create = await Trainings.create({
		id_user: data.userId,
		name: data.name,
		materials: data.materials,
		cost: data.cost,
		content: data.content,
		place: data.place,
	})

	let pathFiles = path.join(__dirname, '..', '..', '..', 'media')

	if (data.photo) {
		create.photo = `${create._id}-${data.photo}`
		fs.writeFile(`${pathFiles}/${create.photo}`, data.photoFile, err => {
			if (err) console.log(err)
		})
	}

	const newTraining = await create.save();
	const query = await Trainings.findOne({
		_id: newTraining._id
	}).populate('id_user')
	io.emit('created::training', query)
}

async function updated(data, io) {
	let pathFiles = path.join(__dirname, '..', '..', '..', 'media')
	let updated = await Trainings.findByIdAndUpdate(data.id, { ...data }, { new: true })
	io.emit('updated::training')

	if (data.isPhoto) {
		fs.writeFile(`${pathFiles}/${updated.photo}`, data.photoFile, err => {
			if (err) console.log(err)
		})
	}
}

async function deleted(data, io) {
	let updated = await Trainings.findByIdAndUpdate(data.id, { isActive: false }, { new: true })
	io.emit('updated::training')
}

function ioTraining (socket, io) {
	socket.on('created::training', data => created(data, io))
	socket.on('updated::training', data => updated(data, io))
	socket.on('deleted::training', data => deleted(data, io))
}

export default ioTraining
