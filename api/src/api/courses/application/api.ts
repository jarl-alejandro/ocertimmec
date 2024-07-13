import Certificate from '../../certificate/domain/model'
import type { Certificate as CertificateType } from "../../certificate/domain/model";
import Training from '../../training/domain/model'
import type { Training as TrainingType } from "../../training/domain/model";
import express from 'express'

const router = express.Router()

async function searchCourses (req, res) {
	const searchString = req.query.searchValue;
	const regex = new RegExp(searchString, 'i');



	const certificate: CertificateType[] = await Certificate.find({ name:  { $regex: searchString, $options: 'i' }, isActive: { $ne: false } })
	const training: TrainingType[] = await Training.find({ name:  { $regex: searchString, $options: 'i' }, isActive: { $ne: false } })

	res.status(200).send([...certificate, ...training])
}


router.get('/search-courses', searchCourses)

export default router;