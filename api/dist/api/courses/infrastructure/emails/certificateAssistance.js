"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = __importDefault(require("../../domain/student"));
const config_1 = __importDefault(require("../../../../config"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const emailCertificateAssist_1 = __importDefault(require("./emailCertificateAssist"));
async function certificateAssistance(data) {
    const student = await student_1.default.findById(data).populate('trainingId');
    if (!student.isCerficateAssiten) {
        const count = await student_1.default.count({
            trainingId: student.trainingId._id,
            isCerficateAssiten: true
        });
        const payload = {
            date: new Date("Thu Aug 13 2020 08:02:45 GMT-0500 (hora de Ecuador)"),
            code: `OCCERTIMM-01-STODGO-ASIST-ARB-FUT-0001-000${count + 1}`
        };
        await student_1.default.findByIdAndUpdate(data, {
            isCerficateAssiten: true,
            certificacion: payload
        }, { new: true });
    }
    const tranport = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: config_1.default.EMAIL,
            pass: config_1.default.PASSWORD
        },
    });
    // const email = "jarlalejor@gmail.com"
    const email = student.email;
    const subject = `CERTIFICACIÓN DE ${student.trainingId.name.toUpperCase()}`;
    const mailOptions = {
        from: config_1.default.EMAIL,
        to: email,
        subject,
        html: (0, emailCertificateAssist_1.default)(student)
    };
    tranport.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log(err);
        console.log(info);
    });
}
exports.default = certificateAssistance;
