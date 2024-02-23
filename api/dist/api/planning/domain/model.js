"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PlanningSchema = new mongoose_1.default.Schema({
    rel: { type: String, default: '' },
    date: { type: String, default: '' },
    hour: [String]
});
const Planning = mongoose_1.default.model('Planning', PlanningSchema, 'Planning');
exports.default = Planning;
