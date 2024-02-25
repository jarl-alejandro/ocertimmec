"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PlanningSchema = new mongoose_1.Schema({
    rel: { type: String, default: '' },
    date: { type: String, default: '' },
    hour: [String]
});
const Planning = (0, mongoose_1.model)('Planning', PlanningSchema, 'Planning');
exports.default = Planning;
