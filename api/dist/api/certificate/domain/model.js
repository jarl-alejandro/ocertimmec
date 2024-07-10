"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CertificateSchema = new mongoose_1.Schema({
    id_user: { type: mongoose_1.Types.ObjectId, ref: 'Users' },
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
exports.default = (0, mongoose_1.model)('Certificate', CertificateSchema, 'Certificate');
