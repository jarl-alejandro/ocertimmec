"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = __importDefault(require("../domain/student"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const emailFinishRegisterOnCourse_1 = __importDefault(require("../infrastructure/emails/emailFinishRegisterOnCourse"));
const config_1 = __importDefault(require("../../../config"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const params_1 = __importDefault(require("../domain/params"));
const certificateAssistance_1 = __importDefault(require("../infrastructure/emails/certificateAssistance"));
async function finalizarInscripcion(payload, io, socket) {
    let id_user = socket.id;
    const route = path_1.default.join(__dirname, '..', '..', '..', 'media');
    let namePDF = '';
    if (payload.file) {
        namePDF = `${payload.inscripcionId}-pdf-requisitos`;
        fs_1.default.writeFile(`${route}/${namePDF}`, payload.file, err => {
            if (err)
                console.log(`Error al subir el archivo -> ${err}`);
        });
    }
    let updated = await student_1.default.findByIdAndUpdate(payload.inscripcionId, { ...payload, pdfRequisitos: namePDF, isComplete: true }, { new: true });
    let object = {
        type: updated.type.toUpperCase() === 'CERTIFICATE' ? 'certificación' : 'capacitación',
        name: `${updated.name} ${updated.lasName}`,
        nameCurso: 'Finalizó el registro'
    };
    io.emit('notificacion', object);
    console.log(updated);
    io.sockets.connected[id_user].emit('terminar::register');
    io.emit('registerInscripcion');
    io.emit('finalizar::inscripcion', payload);
}
async function finishRegister(payload, io) {
    const student = await student_1.default.findById(payload.id).populate('certificateId');
    const name = student.certificateId.name.toString().toUpperCase();
    const validParams = await params_1.default.findOne({ name });
    let param = await params_1.default.findOneAndUpdate({ name }, { name, $inc: { "counter": 1 } }, { upsert: true, 'new': true });
    updatedStudent(param.counter, io, payload);
}
async function updatedStudent(count, io, payload) {
    let updated = await student_1.default.findByIdAndUpdate(payload.id, {
        isAll: true,
        codigoCertificado: payload.code,
        placeCertificate: payload.placeCertificate,
        dateCertificate: payload.date,
        hourCertificate: payload.hour,
        notaCertificate: payload.nota,
        numberAplicacion: count
    }, { new: true });
    console.log(count);
    io.emit('registerInscripcion');
}
async function certificate(payload, io) {
    if (payload.noCertificate) {
        let updated = await student_1.default.findByIdAndUpdate(payload.id, {
            isNoCertificateSetec: true,
        }, { new: true });
    }
    else {
        let updated = await student_1.default.findByIdAndUpdate(payload.id, {
            isCertificateSetec: true,
            codeSetec: payload.codeSetec,
            dateExpedicion: payload.dateExpedicion,
            dateExpiracion: payload.dateExpiracion,
        }, { new: true });
    }
    io.emit('registerInscripcion');
}
async function verificarEmail(payload, io) {
    await student_1.default.findByIdAndUpdate(payload, { isVerifiy: true, fechaAceptacion: new Date() }, { new: true });
    io.emit('registerInscripcion');
    let query = await student_1.default.findById(payload).populate('certificateId');
    const tranport = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: config_1.default.EMAIL,
            pass: config_1.default.PASSWORD
        },
    });
    const mailOptions = {
        from: config_1.default.EMAIL,
        to: query.email,
        subject: `CERTIFICACIÓN DE ${query.certificateId.name.toUpperCase()}`,
        html: (0, emailFinishRegisterOnCourse_1.default)(query._id, query)
    };
    tranport.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log(err);
        console.log(info);
    });
}
async function deleted(data, io) {
    let updated = await student_1.default.findByIdAndUpdate(data.id, { isActive: false }, { new: true });
    io.emit('updated::student');
}
async function updated(data, io, socket) {
    let id_user = socket.id;
    let updated = await student_1.default.findByIdAndUpdate(data.inscripcionId, { ...data, isComplete: true, isVerifiy: true }, { new: true });
    io.sockets.connected[id_user].emit('terminar::register');
}
function ioCourse(socket, io) {
    socket.on('certificate::assistance', data => (0, certificateAssistance_1.default)(data, io));
    socket.on('finalizar::inscripcion', data => finalizarInscripcion(data, io, socket));
    socket.on('verificar::email', data => verificarEmail(data, io));
    socket.on('finish::register', data => finishRegister(data, io));
    socket.on('registerInscripcion', data => {
        let object = {
            type: data.type.toUpperCase() === 'CERTIFICATE' ? 'certificación' : 'capacitación',
            name: `${data.name} ${data.lasName}`,
            nameCurso: data.nameCurso
        };
        io.emit('notificacion', object);
        io.emit('registerInscripcion');
    });
    socket.on('deleted::student', data => deleted(data, io));
    socket.on('certificado::estudiante', data => certificate(data, io));
    socket.on('updated::student::inscripcion', data => updated(data, io, socket));
}
exports.default = ioCourse;
