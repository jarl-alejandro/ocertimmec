"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CertificateSchema = new mongoose_1.default.Schema({
    id_user: { type: mongoose_1.default.Schema.ObjectId, ref: 'Users' },
    name: { type: String, default: "" },
    photo: String,
    cost: { type: Number, default: 0 },
    requirements: { type: String, default: '' },
    competition: { type: String, default: '' },
    competitionUnits: { type: String, default: '' },
    description: { type: String, default: '' },
    place: { type: String, default: '' },
    note: { type: String, default: '' },
    type: { type: String, default: 'Certificate' },
    uc: String,
    sector: String,
    isActive: { type: Boolean, default: true },
    squemaCode: { type: String },
});
const Certificate = mongoose_1.default.model('Certificate', CertificateSchema, 'Certificate');
exports.default = Certificate;
