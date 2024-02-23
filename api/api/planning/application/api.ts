import Planning from '../domain/model'
import express from 'express'

async function getPlanning (req, res) {
	let query = await Planning.find()
	res.status(200).send(query)
}

const router = express.Router()

router.get('/planning', getPlanning)

export default router
