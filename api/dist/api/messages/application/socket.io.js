"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../domain/model"));
async function created(data, io) {
    await model_1.default.create({ ...data });
    io.emit('updated::Message');
}
async function deleted(data, io) {
    await model_1.default.findOneAndDelete({ _id: data.id });
    io.emit('updated::Message');
}
function ioMessage(socket, io) {
    socket.on('created::Message', data => created(data, io));
    socket.on('deleted::Message', data => deleted(data, io));
}
exports.default = ioMessage;
