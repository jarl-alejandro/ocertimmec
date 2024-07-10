"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../domain/model"));
const express_1 = __importDefault(require("express"));
async function getPlanning(req, res) {
    let query = await model_1.default.find();
    res.status(200).send(query);
}
const router = express_1.default.Router();
router.get('/planning', getPlanning);
exports.default = router;
