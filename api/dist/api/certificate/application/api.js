"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../domain/model"));
const model_2 = __importDefault(require("../../planning/domain/model"));
const express_1 = __importDefault(require("express"));
async function getCertificate(req, res) {
    const query = await model_1.default.find({ isActive: { $ne: false } })
        .populate('id_user');
    res.status(200).send(query);
}
async function getCertificateOne(req, res) {
    const certificate = await model_1.default.findById(req.params.id);
    const planningCertificate = await model_2.default.find({ rel: certificate._id.toString() });
    res.send({
        certificate,
        planning: planningCertificate
    });
}
const router = express_1.default.Router();
router.get('/certificate', getCertificate);
router.get('/certificate/:id', getCertificateOne);
exports.default = router;
