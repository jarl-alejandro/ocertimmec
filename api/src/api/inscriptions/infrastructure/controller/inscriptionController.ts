import express, { Request, Response } from 'express';

import { CreateInscription } from '../../application/CreateInscription'
import { InscriptionCommand } from 'api/inscriptions/domain/InscriptionCommand';
import { MongoAndExternalStudentInfoRepository } from '../MongoAndExternalStudentInfoRepository';
import { SearchStudentInfo } from '../../application/SearchStudentInfo';
import { StudentInfoRepository } from 'api/inscriptions/domain/StudentInfoRepository';
import multer from 'multer'
import path from 'path'

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


router.post('/inscription', upload.single('requirementsPDF'),  (req: Request, res: Response) => {
  const documentFile = (req as any).file?.filename;
  const command: InscriptionCommand = {
    name: req.body.name,
    lastName: req.body.lastName,
    document: req.body.document,
    birthdate: req.body.birthdate,
    direction: req.body.direction,
    province: req.body.province,
    city: req.body.city,
    celphone: req.body.celphone,
    phone: req.body.phone,
    email: req.body.email,
    requirementsPDF: documentFile,
  
    //CurrentEducation
    primaryInstitutionName: req.body.primaryInstitutionName,
    primaryCountry: req.body.primaryCountry,
    primaryCity: req.body.primaryCity,
    primaryDegree: req.body.primaryDegree,
    secondaryInstitutionName: req.body.secondaryInstitutionName,
    secondaryCountry: req.body.secondaryCountry,
    secondaryCity: req.body.secondaryCity,
    secondaryDegree: req.body.secondaryDegree,
    technicalInstitutionName: req.body.technicalInstitutionName,
    technicalCountry: req.body.technicalCountry,
    technicalCity: req.body.technicalCity,
    technicalDegree: req.body.technicalDegree,
    tertiaryInstitutionName: req.body.tertiaryInstitutionName,
    tertiaryCountry: req.body.tertiaryCountry,
    tertiaryCity: req.body.tertiaryCity,
    tertiaryDegree: req.body.tertiaryDegree,
    quaternaryInstitutionName: req.body.quaternaryInstitutionName,
    quaternaryCountry: req.body.quaternaryCountry,
    quaternaryCity: req.body.quaternaryCity,
    quaternaryDegree: req.body.quaternaryDegree,
  
    // Training
    course1NameCourse: req.body.course1NameCourse,
    course1InstitutionName: req.body.course1InstitutionName,
    course1DateCourse: req.body.course1DateCourse,
    course1HourCourse: req.body.course1HourCourse,
    course2NameCourse: req.body.course2NameCourse,
    course2InstitutionName: req.body.course2InstitutionName,
    course2DateCourse: req.body.course2DateCourse,
    course2HourCourse: req.body.course2HourCourse,
    course3NameCourse: req.body.course3NameCourse,
    course3InstitutionName: req.body.course3InstitutionName,
    course3DateCourse: req.body.course3DateCourse,
    course3HourCourse: req.body.course3HourCourse,
  
    // WorkExperience
    experience1From: req.body.experience1From,
    experience1To: req.body.experience1To,
    experience1CompanyName: req.body.experience1CompanyName,
    experience1CompanyAddress: req.body.experience1CompanyAddress,
    experience1CompanyPhone: req.body.experience1CompanyPhone,
    experience1JobFunction: req.body.experience1JobFunction,
    experience2From: req.body.experience2From,
    experience2To: req.body.experience2To,
    experience2CompanyName: req.body.experience2CompanyName,
    experience2CompanyAddress: req.body.experience2CompanyAddress,
    experience2CompanyPhone: req.body.experience2CompanyPhone,
    experience2JobFunction: req.body.experience2JobFunction,
    experience3From: req.body.experience3From,
    experience3To: req.body.experience3To,
    experience3CompanyName: req.body.experience3CompanyName,
    experience3CompanyAddress: req.body.experience3CompanyAddress,
    experience3CompanyPhone: req.body.experience3CompanyPhone,
    experience3JobFunction: req.body.experience3JobFunction,
  
    // PersonalData
    experience3Autoidentificacion: req.body.experience3Autoidentificacion,
  
    // Citizens
    tipoOcupacion: req.body.tipoOcupacion,
    contrato: req.body.contrato,
  
    // WorkingConditions
    workingConditionsSeguroMedico: req.body.workingConditionsSeguroMedico,
    sueldoTrece: req.body.sueldoTrece,
    sueldoCatorce: req.body.sueldoCatorce,
    sueldo: req.body.sueldo,
    cambioPuesto: req.body.cambioPuesto,
    satisfechoEmpleo: req.body.satisfechoEmpleo,
    agotadoEmpleo: req.body.agotadoEmpleo,
    respetanTrabajo: req.body.respetanTrabajo,
    jefesReconocenTrabajo: req.body.jefesReconocenTrabajo,
    riesgosLaborales: req.body.riesgosLaborales,
    deseaCambiarTrabajo: req.body.deseaCambiarTrabajo,
  
    // LivingConditions
    livingConditionsSeguroMedico: req.body.livingConditionsSeguroMedico,
    hijos: req.body.hijos,
    cuantoHijos: req.body.cuantoHijos,
    hijosMayorTres: req.body.hijosMayorTres,
    estudian: req.body.estudian,
    miembrosHogar: req.body.miembrosHogar,
    propiedad: req.body.propiedad,
    servicioBasico: req.body.servicioBasico,
    discapacidad: req.body.discapacidad,
    tipoDiscapacidad: req.body.tipoDiscapacidad,
    socioEmpleo: req.body.socioEmpleo,
    trainingId: req.body.trainingId === 'null' ? null : req.body.trainingId,
    certificateId: req.body.certificateId === 'null' ? null : req.body.certificateId,
  };

  const createInscription = new CreateInscription();
  createInscription.create(command);

  res
    .status(201)
    .json({ message: 'success saved inscription' })
})

router.get('/find/student/:identity', async (req: Request, res: Response) => {
  const identity: string = req.params.identity;
  const repo: StudentInfoRepository = new MongoAndExternalStudentInfoRepository();
  const searchStudentInfo = new SearchStudentInfo(repo);

  
  res.status(200)
    .json({ studentInfo: await searchStudentInfo.find(identity) })
})

export default router;