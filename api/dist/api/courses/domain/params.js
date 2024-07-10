"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const paramsSchema = new mongoose_1.Schema({
    name: { type: String, default: '' },
    counter: { type: Number, default: 0 },
});
const Params = (0, mongoose_1.model)('Params', paramsSchema, 'Params');
exports.default = Params;
