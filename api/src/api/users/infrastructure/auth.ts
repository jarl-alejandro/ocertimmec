import Users from '../domain/model'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import _ from 'lodash'
import config from '../../../enviroments/config'


async function auth (req, res) {
	const user = await Users.findOne({ email: req.body.email })
	
	if (!user) return res.send({ message: 'Usuario no existe', success: false })
  if (!user.isActive) return res.send({ message: 'Usuario no existe', success: false })

	const valid = await bcrypt.compare(req.body.password, user.password)

	if (!valid)
		return res.send({ message: 'Usuario y Contraseña incorrecta', success: false })

	const token = jwt.sign(
		{ user: _.pick(user, ['_id']) },
		config.JWT_SECRET, { expiresIn: '1y' }
	)

	return res.send({ token, user, message: 'Ha iniciado sesión', success: true })
}

export default auth
