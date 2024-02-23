import expres from 'express'
import { generatePDF, generatePDF007 } from './index'
import datosEstudiantes from './datosEstudiantes'
import generateCertificate from '../generateCertificate'

const router = expres.Router()

router.get('/pdf/:id/certificate', generateCertificate)
router.get('/pdf/:id/formulario', generatePDF)
router.get('/pdf/:id/formulario/007', generatePDF007)
router.get('/pdf/:id/datos-estudiantes', datosEstudiantes)

export default router
