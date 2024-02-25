"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TrainingSchema = new mongoose_1.Schema({
    id_user: { type: mongoose_1.Types.ObjectId, ref: 'Users' },
    cost: { type: Number, default: 0 },
    content: { type: String, default: '' },
    materials: { type: String, default: '' },
    place: { type: String, default: '' },
    name: { type: String, default: "" },
    type: { type: String, default: 'Training' },
    photo: String,
    isActive: { type: Boolean, default: true }
});
exports.default = (0, mongoose_1.model)('Trainings', TrainingSchema, 'Trainings');
