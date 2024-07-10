import Message from '../domain/model'
import express from 'express'

async function getMessage (req, res) {
	const query = await Message.find()
	res.status(200).send(query)
}

const router = express.Router()

router.get('/messages', getMessage)

export default router
