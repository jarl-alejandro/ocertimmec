import expres from 'express'
import { generatePDF, generatePDF007 } from './reportsManagementSystemForms/reports'
import datosEstudiantes from './studentData/datosEstudiantes'
import generateCertificate from '../../certificate/infrastructure/reports/report'

const routerReports = expres.Router()

// Este router se debe mover al otro modulo
routerReports.get('/pdf/:id/certificate', generateCertificate)

routerReports.get('/pdf/:id/formulario', generatePDF)
routerReports.get('/pdf/:id/formulario/007', generatePDF007)

//sto debe ir a otro modulo
routerReports.get('/pdf/:id/datos-estudiantes', datosEstudiantes)

export default routerReports
