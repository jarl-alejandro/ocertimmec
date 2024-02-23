"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePDF007 = exports.generatePDF = void 0;
const phantom_html_to_pdf_1 = __importDefault(require("phantom-html-to-pdf"));
const template_1 = __importDefault(require("./form/template"));
const template007_1 = __importDefault(require("./form/template007"));
const student_1 = __importDefault(require("../../../courses/domain/student"));
const model_1 = __importDefault(require("../../../certificate/domain/model"));
const model_2 = __importDefault(require("../../../planning/domain/model"));
const conversion = (0, phantom_html_to_pdf_1.default)();
async function generatePDF(req, res) {
    let id = req.params.id;
    let student = await student_1.default.findById(id);
    let certificate = await model_1.default.findById(student.certificateId)
        .populate('id_user');
    let planning = await model_2.default.findOne({ rel: student.certificateId });
    conversion({
        encoding: 'utf8',
        html: (0, template_1.default)(student, certificate, planning),
        footer: '<div style="font-size:10px;float:left;position:absolute;bottom:2px;">Proceso de Reconocimiento como Organismo Evaluador de la Conformidad OEC - SETEC</div>',
    }, function (err, pdf) {
        pdf.stream.pipe(res);
    });
}
exports.generatePDF = generatePDF;
async function generatePDF007(req, res) {
    let id = req.params.id;
    let student = await student_1.default.findById(id);
    let certificate = await model_1.default.findById(student.certificateId)
        .populate('id_user');
    conversion({
        encoding: 'utf8',
        html: (0, template007_1.default)(student, certificate),
        footer: '<div style="font-size:10px;float:left;position:absolute;bottom:2px;">Proceso de Reconocimiento como Organismo Evaluador de la Conformidad OEC - SETEC</div>',
        paperSize: {
            orientation: 'landscape'
        }
    }, function (err, pdf) {
        pdf.stream.pipe(res);
    });
}
exports.generatePDF007 = generatePDF007;
