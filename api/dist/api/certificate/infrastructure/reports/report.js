"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const phantom_html_to_pdf_1 = __importDefault(require("phantom-html-to-pdf"));
const template_1 = __importDefault(require("./template"));
const student_1 = __importDefault(require("../../../courses/domain/student"));
const conversion = (0, phantom_html_to_pdf_1.default)();
async function generatePDF(req, res) {
    let id = req.params.id;
    let student = await student_1.default.findById(id).populate('certificateId');
    conversion({
        encoding: 'utf8',
        html: (0, template_1.default)(student),
        paperSize: {
            format: 'A4',
            orientation: 'portrait',
            margin: { bottom: '0.4cm', left: '0cm', right: '0cm', top: '0.5cm' },
        }
    }, function (err, pdf) {
        pdf.stream.pipe(res);
    });
    /*
res.send(template(student))
*/
}
exports.default = generatePDF;
