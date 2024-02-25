"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const model_1 = __importDefault(require("../../certificate/domain/model"));
const model_2 = __importDefault(require("../../training/domain/model"));
const model_3 = __importDefault(require("../../planning/domain/model"));
const student_1 = __importDefault(require("../domain/student"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../../../config"));
const emailFinishRegisterOnCourse_1 = __importDefault(require("../infrastructure/emails/emailFinishRegisterOnCourse"));
const nodemailer_1 = __importDefault(require("nodemailer"));
async function register(req, res) {
    let student = new student_1.default({
        isVerifiy: true,
        fechaAceptacion: new Date(),
        document: req.body.document.toString(),
        name: req.body.name,
        lastName: req.body.lastName,
        birthdate: req.body.birthdate,
        direction: req.body.direction,
        province: req.body.province,
        city: req.body.city,
        phone: req.body.phone,
        celphone: req.body.celphone,
        fechaAplicacion: req.body.fechaAplicacion,
        email: req.body.email,
        type: req.body.type,
        work: req.body.work,
        nameCompany: req.body.nameCompany,
        activity: req.body.activity,
        experience: req.body.experience,
        numberTrainig: req.body.numberTrainig,
        traning: req.body.traning,
        level: req.body.level,
    });
    if (req.body.type === 'training') {
        student.trainingId = req.body.trainingId;
    }
    if (req.body.type === 'certificate') {
        student.certificateId = req.body.certificateId;
    }
    student.save(async (err) => {
        if (err) {
            console.log(err);
            res.send({
                status: 500,
                message: 'No se pudo registrar intente nuevamenete'
            });
        }
        else {
            if (req.body.type === 'certificate') {
                const query = await student_1.default.findById(student._id).populate('certificateId trainingId');
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
            res.send({
                status: 201,
                message: 'Se ha guardado con exito felicidades'
            });
        }
    });
}
async function getInscripcion(req, res) {
    let query = await student_1.default.findById(req.params.id);
    res.send(query);
}
async function getInscriptiones(req, res) {
    let query = await student_1.default.find({
        isActive: { $ne: false },
        isCertificateSetec: { $ne: true },
        isNoCertificateSetec: { $ne: true }
    })
        .populate('certificateId')
        .populate('trainingId');
    res.send(query);
}
async function getCertfificate(req, res) {
    let query = await student_1.default.find({ isActive: { $ne: false }, isCertificateSetec: true })
        .populate('certificateId')
        .populate('trainingId');
    res.send(query);
}
async function getNoCertfificate(req, res) {
    let query = await student_1.default.find({ isActive: { $ne: false }, isNoCertificateSetec: true })
        .populate('certificateId')
        .populate('trainingId');
    res.send(query);
}
async function getCertificateTraining(req, res) {
    const certificate = await model_1.default.find({ isActive: { $ne: false } });
    const training = await model_2.default.find({ isActive: { $ne: false } });
    res.send([...certificate, ...training]);
}
function getDescargar(req, res) {
    const route = path_1.default.join(__dirname, '..', '..', '..', 'media', req.params.name);
    res.download(route);
}
async function notify(req, res) {
    let query = await student_1.default.find({
        $or: [
            { isComplete: true },
            { isVerifiy: false },
            { isAll: false },
        ]
    }, { type: 1, name: 1, lastName: 1, certificateId: 1, trainingId: 1 })
        .populate('certificateId')
        .populate('trainingId');
    res.send(query);
}
const router = express_1.default.Router();
router.get('/inscripciones', getInscriptiones);
router.get('/student-certificados', getCertfificate);
router.get('/student-no-certificados', getNoCertfificate);
router.get('/inscription/:id', getInscripcion);
router.get('/notificaciones', notify);
router.post('/registrame', register);
router.get('/training-certificate', getCertificateTraining);
router.get('/descargar-requisitos/:name', getDescargar);
router.get('/students', async (req, res) => {
    let array = [];
    const query = await student_1.default.find({ isComplete: true }).populate('certificateId.id_user');
    query.map(async (item, index) => {
        let planning = await model_3.default.find({ rel: item.certificateId._id.toString() });
        let object = { item, planning };
        array.push(object);
        if (query.length === index + 1)
            res.send(array);
    });
});
exports.default = router;
