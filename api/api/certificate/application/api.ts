import Certificate from '../domain/model'
import Planning from '../../planning/domain/model'
import express from 'express'

async function getCertificate (req, res) {
	const query = await Certificate.find({ isActive: { $ne: false } })
		.populate('id_user')

	res.status(200).send(query)
}

async function getCertificateOne (req, res) {
	const certificate = await Certificate.findById(req.params.id)
	const planningCertificate = await Planning.find({ rel: certificate._id })

	res.send({
		certificate,
		planning: planningCertificate
	})
}

const router = express.Router()

router.get('/certificate', getCertificate)
router.get('/certificate/:id', getCertificateOne)

export default router
