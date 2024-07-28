import express, { Request, Response } from 'express';

import { CreateInscription } from '../../application/CreateInscription'
import { InscriptionCommand } from 'api/inscriptions/domain/InscriptionCommand';
import { MongoAndExternalStudentInfoRepository } from '../MongoAndExternalStudentInfoRepository';
import { SearchStudentInfo } from '../../application/SearchStudentInfo';
import { StudentInfoRepository } from 'api/inscriptions/domain/StudentInfoRepository';
import multer from 'multer'
import path from 'path'
import {convertRequestToCommand} from "./convertRequestToCommand";
import {UpdateInscription} from "../../application/UpdateInscription";

const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  	const routeFile = path.join(__dirname, '..', '..', '..', '..', '..', '..', '..', 'media')
    cb(null, routeFile)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const fileExtension = path.extname(file.originalname);

    cb(null, `${file.fieldname.split(' ').join('')}-${uniqueSuffix}-pdf-requisitos${fileExtension}`)
  }
})
const upload = multer({ storage: storage })

export interface CourseRequest {
	id: string;
	type: string;
}

router.post('/inscription', upload.single('requirementsPDF'),  async (req: Request, res: Response) => {
  const documentFile = (req as any).file?.filename;
	const courses: CourseRequest[] = JSON.parse(req.body.courses);
	const createInscription = new CreateInscription();

	for (const course of courses) {
		const command: InscriptionCommand = convertRequestToCommand(req.body, documentFile, course)
		await createInscription.create(command)
	}

  res
    .status(201)
    .json({ message: 'success saved inscription' })
})

router.put('/inscription', upload.single('requirementsPDF'),  async (req: Request, res: Response) => {
	const documentFile = (req as any).file?.filename;
	const courses: CourseRequest[] = JSON.parse(req.body.courses);
	const updateInscription = new UpdateInscription();

	for (const course of courses) {
		const command: InscriptionCommand = convertRequestToCommand(req.body, documentFile, course);
		await updateInscription.update(req.body.id, command)
	}

	res
		.status(201)
		.json({ message: 'success saved inscription' })
})

router.post('/find/student/:identity', async (req: Request, res: Response) => {
	const document: string = req.body.document;
	const courseId: string = req.body.courseId;
	const isCertificate: boolean = req.body.isCertificate;

  const repo: StudentInfoRepository = new MongoAndExternalStudentInfoRepository();
  const searchStudentInfo = new SearchStudentInfo(repo);

  res.status(200)
    .json({ studentInfo: await searchStudentInfo.find(document, courseId, isCertificate, ) })
})

export default router;
