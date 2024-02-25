import Certificate from '../domain/model'
import fs from 'fs'
import path from 'path'

async function created (data, io) {
	let certificateToSave = new Certificate({
		id_user: data.userId,
		name: data.nameCertificate,
		description: data.description,
		competition: data.competition,
		competitionUnits: data.competitionUnits,
		requirements: data.requirements,
		cost: data.cost,
		place: data.place,
		note: data.note,
		uc: data.uc,
		squemaCode: data.squemaCode,
		sector: data.sector,
	});

	const create = await certificateToSave.save();

	let pathFiles = path.join(__dirname, '..', '..', '..', 'media')

	if (data.photo) {
		create.photo = `${create._id}-${data.photo}`
		fs.writeFile(`${pathFiles}/${create.photo}`, data.photoFile, err => {
			if (err) console.log(err)
		})
	}

	create.save(async err => {
		if (err) console.log(err)
		else {
			const query = await Certificate.findById(create._id).populate('id_user')
			io.emit('created::certificate', query)
		}
	})
}

async function updated (data, io) {
	let pathFiles = path.join(__dirname, '..', '..', '..', 'media')

	if (data.isPhoto) {
		data.photo = `updated_${Date.now()}${data.id}-${data.photo}`
	}


	let updated = await Certificate.findByIdAndUpdate(data.id, { ...data }, { new:true })
	io.emit('updated::certificate')

	if (data.isPhoto) {
		fs.writeFile(`${pathFiles}/${updated.photo}`, data.photoFile, err => {
			if (err) console.log(err)
		})
	}
}

async function deleted (data, io) {
	let updated = await Certificate.findByIdAndUpdate(data.id, { isActive: false }, { new: true })
	io.emit('updated::certificate')
}

function ioCertificate (socket, io) {
	socket.on('created::certificate', data => created(data, io))
	socket.on('updated::certificate', data => updated(data, io))
	socket.on('deleted::certificate', data => deleted(data, io))
}

export default ioCertificate
