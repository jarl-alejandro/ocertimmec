"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../domain/model"));
const auth_1 = __importDefault(require("../infrastructure/auth"));
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function getUsers(req, res) {
    const query = await model_1.default.find({ isActive: { $ne: false }, email: { $ne: 'admin@occertimm.com' } });
    res.status(200).send(query);
}
async function getUserId(req, res) {
    const query = await model_1.default.findById(req.params.id);
    res.status(200).send(query);
}
async function getUsersRol(req, res) {
    const query = await model_1.default.find({ roles: req.params.rol });
    res.status(200).send(query);
}
async function updatedPassword(req, res) {
    const query = await model_1.default.find({ isActive: { $ne: false } });
    let arr = [];
    let password = 'occertimm';
    query.map(item => {
        bcryptjs_1.default.genSalt(10, (err, salt) => {
            bcryptjs_1.default.hash(password, salt, async (err, hash) => {
                let updated = await model_1.default.findByIdAndUpdate(item._id, { password: hash }, { new: true });
                arr.push(updated);
            });
        });
        if (arr.length == query.length)
            res.send(arr);
    });
}
async function createUserFake(req, res) {
    const create = await model_1.default.create({
        'email': "admin@occertimm.com",
        'isActive': true,
        'name': "occertimm",
        'roles': "Supervisor",
        'workExperience': "",
        'levelInstruction': "",
        'teachingExperience': "",
        'trainingProfile': "",
        'trainingPedagogy': "",
        'cedula': "",
        password: 'occertimm'
    });
    res.send(create);
}
const router = express_1.default.Router();
router.post('/login', auth_1.default);
router.get('/updated-password', updatedPassword);
router.get('/created-user-fake', createUserFake);
router.get('/users', getUsers);
router.get('/users/:id', getUserId);
router.get('/users/rol/:rol', getUsersRol);
exports.default = router;
