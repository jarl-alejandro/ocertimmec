"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../domain/model"));
async function created(data, io) {
    Object.keys(data.payload).map(async (item) => {
        let date = data.payload[item];
        let create = await model_1.default.create({
            rel: data.rel,
            date: date.date,
            hour: date.hour
        });
    });
    console.log(data);
    // io.emit('created::training', query)
}
function io(socket, io) {
    socket.on('created::planning', data => created(data, io));
}
exports.default = io;
