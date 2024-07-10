"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../domain/model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const lodash_1 = __importDefault(require("lodash"));
const config_1 = __importDefault(require("../../../enviroments/config"));
async function auth(req, res) {
    const user = await model_1.default.findOne({ email: req.body.email });
    if (!user)
        return res.send({ message: 'Usuario no existe', success: false });
    if (!user.isActive)
        return res.send({ message: 'Usuario no existe', success: false });
    const valid = await bcryptjs_1.default.compare(req.body.password, user.password);
    if (!valid)
        return res.send({ message: 'Usuario y Contraseña incorrecta', success: false });
    const token = jsonwebtoken_1.default.sign({ user: lodash_1.default.pick(user, ['_id']) }, config_1.default.JWT_SECRET, { expiresIn: '1y' });
    return res.send({ token, user, message: 'Ha iniciado sesión', success: true });
}
exports.default = auth;
