"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TrainingSchema = new mongoose_1.default.Schema({
    id_user: { type: mongoose_1.default.Schema.ObjectId, ref: 'Users' },
    cost: { type: Number, default: 0 },
    content: { type: String, default: '' },
    materials: { type: String, default: '' },
    place: { type: String, default: '' },
    name: { type: String, default: "" },
    type: { type: String, default: 'Training' },
    photo: String,
    isActive: { type: Boolean, default: true }
});
const Trainings = mongoose_1.default.model('Trainings', TrainingSchema, 'Trainings');
exports.default = Trainings;
