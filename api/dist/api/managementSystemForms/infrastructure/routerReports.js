"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reports_1 = require("./reportsManagementSystemForms/reports");
const datosEstudiantes_1 = __importDefault(require("./studentData/datosEstudiantes"));
const report_1 = __importDefault(require("../../certificate/infrastructure/reports/report"));
const routerReports = express_1.default.Router();
// Este router se debe mover al otro modulo
routerReports.get('/pdf/:id/certificate', report_1.default);
routerReports.get('/pdf/:id/formulario', reports_1.generatePDF);
routerReports.get('/pdf/:id/formulario/007', reports_1.generatePDF007);
//sto debe ir a otro modulo
routerReports.get('/pdf/:id/datos-estudiantes', datosEstudiantes_1.default);
exports.default = routerReports;
