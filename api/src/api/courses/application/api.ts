import Certificate from '../../certificate/domain/model'
import type { Certificate as CertificateType } from "../../certificate/domain/model";
import InscriptionEntity from '../../inscriptions/domain/student';
import Training from '../../training/domain/model'
import type { Training as TrainingType } from "../../training/domain/model";
import express from 'express'

const router = express.Router()

async function searchCourses (req, res) {
	const searchString = req.query.searchValue;
	const certificate: CertificateType[] = await Certificate.find({ name:  { $regex: searchString, $options: 'i' }, isActive: { $ne: false } })
	const training: TrainingType[] = await Training.find({ name:  { $regex: searchString, $options: 'i' }, isActive: { $ne: false } })

	res.status(200).send([...certificate, ...training])
}

async function bestCourses(req, res) {
	const results = await InscriptionEntity.aggregate([
		{
			$facet: {
				certificateCounts: [
					{ $match: { certificateId: { $exists: true } } },
					{ $group: { _id: "$certificateId", count: { $sum: 1 } } },
					{ $sort: { count: -1 } },
					{ $limit: 3 },
				],
				trainingCounts: [
					{ $match: { trainingId: { $exists: true } } },
					{ $group: { _id: "$trainingId", count: { $sum: 1 } } },
					{ $sort: { count: -1 } },
					{ $limit: 3 },
				],
			}
		},
		{
			$project: {
				topCourses: {
					$setUnion: ["$certificateCounts", "$trainingCounts"]
				}
			}
		},
		{ $unwind: "$topCourses" },
		{ $replaceRoot: { newRoot: "$topCourses" } },
		{ $sort: { count: -1 } },
		{ $limit: 3 }
	]);

	const certificate: CertificateType[] = await Certificate.find({
		$or: [
			{ _id: { $in: results.map(i => i._id) } },
		],
		isActive: { $ne: false }
	})
	const training: TrainingType[] = await Training.find({
		$or: [
			{ _id: { $in: results.map(i => i._id) } },
		],
		isActive: { $ne: false }
	})

	res.status(200).send([...certificate, ...training])

}

router.get('/search-courses', searchCourses)
router.get('/best-courses', bestCourses)

export default router;

/*
  const students = await Student.find({
      $or: [
        { certificateId: { $in: certificateIds } },
        { trainingId: { $in: trainingIds } }
      ]
    });
*/