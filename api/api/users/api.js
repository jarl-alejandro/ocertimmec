import Users from './model'
import auth from './auth'
import express from 'express'
import bcrypt from 'bcryptjs'

async function getUsers (req, res) {
	const query = await Users.find({ isActive: { $ne: false }, email: { $ne: 'admin@occertimm.com' } })

	res.status(200).send(query)
}

async function getUserId (req, res) {
	const query = await Users.findById(req.params.id)
	res.status(200).send(query)
}

async function getUsersRol (req, res) {
	const query = await Users.find({ roles: req.params.rol })
	res.status(200).send(query)
}

async function updatedPassword (req, res) {
	const query = await Users.find({ isActive: { $ne: false } })
	let arr = []
	let password = 'occertimm'

	query.map( item => {

		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(password, salt, async (err, hash) => {
				let updated = await Users.findByIdAndUpdate(item._id, { password: hash }, { new: true })
				arr.push(updated)
			})
		})

		if (arr.length == query.length)
			res.send(arr)
	})

}

async function createUserFake (req, res) {
	const create = await Users.create({
		'email': "admin@occertimm.com",
		'isActive': true,
		'name': "occertimm",
		'roles': "Supervisor",
		'workExperience': "",
		'levelInstruction': "",
		'teachingExperience': "",
		'trainingProfile': "",
		'trainingPedagogy': "",
		'cedula': "",

		password: 'occertimm'
	})

	res.send(create)
}

const router = express.Router()
router.post('/login', auth)
router.get('/updated-password', updatedPassword)
router.get('/created-user-fake', createUserFake)

router.get('/users', getUsers)
router.get('/users/:id', getUserId)
router.get('/users/rol/:rol', getUsersRol)

export default router
