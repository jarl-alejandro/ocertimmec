"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const phantom_html_to_pdf_1 = __importDefault(require("phantom-html-to-pdf"));
const qrcode_1 = __importDefault(require("qrcode"));
const student_1 = __importDefault(require("../../../courses/domain/student"));
const template_1 = __importDefault(require("./template"));
const config_1 = __importDefault(require("../../../../enviroments/config"));
const conversion = (0, phantom_html_to_pdf_1.default)();
async function handleCertificate(req, res) {
    let student = await student_1.default.findById(req.params.userId, { certificacion: 1, name: 1, lastName: 1, trainingId: 1 })
        .populate('trainingId trainingId.id_user');
    const urlPDF = `${config_1.default.API}/certificado-capacitacion/${student._id}/certificacion-asistencia`;
    qrcode_1.default.toDataURL(urlPDF, function (err, url) {
        conversion({
            encoding: 'utf8',
            html: (0, template_1.default)(student, url),
            paperSize: {
                format: 'A4',
                orientation: 'landscape',
                margin: { bottom: '0cm', left: '0cm', right: '0cm', top: '0cm' },
            },
        }, function (err, pdf) {
            pdf.stream.pipe(res);
        });
    });
}
const router = express_1.default.Router();
router.get('/certificado-capacitacion/:userId/certificacion-asistencia', handleCertificate);
exports.default = router;
