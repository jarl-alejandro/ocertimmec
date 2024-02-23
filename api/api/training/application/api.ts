import Trainings from '../domain/model'
import Planning from '../../planning/domain/model'

import express from 'express'

async function getTraining (req, res) {
	const query = await Trainings.find({ isActive: { $ne: false } })
		.populate('id_user')

	res.status(200).send(query)
}

async function getTrainingOne (req, res) {
	const training = await Trainings.findById(req.params.id)
	const planningTraining = await Planning.find({ rel: training._id })

	res.send({
		training,
		planning: planningTraining
	})
}

const router = express.Router()

router.get('/trainings', getTraining)
router.get('/trainings/:id', getTrainingOne)

export default router
