"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const model_1 = __importDefault(require("../domain/model"));
async function created(data, io) {
    const create = await model_1.default.create({
        id_user: data.userId,
        name: data.name,
        materials: data.materials,
        cost: data.cost,
        content: data.content,
        place: data.place,
    });
    let pathFiles = path_1.default.join(__dirname, '..', '..', '..', 'media');
    if (data.photo) {
        create.photo = `${create._id}-${data.photo}`;
        fs_1.default.writeFile(`${pathFiles}/${create.photo}`, data.photoFile, err => {
            if (err)
                console.log(err);
        });
    }
    const newTraining = await create.save();
    const query = await model_1.default.findOne({
        _id: newTraining._id
    }).populate('id_user');
    io.emit('created::training', query);
}
async function updated(data, io) {
    let pathFiles = path_1.default.join(__dirname, '..', '..', '..', 'media');
    let updated = await model_1.default.findByIdAndUpdate(data.id, { ...data }, { new: true });
    io.emit('updated::training');
    if (data.isPhoto) {
        fs_1.default.writeFile(`${pathFiles}/${updated.photo}`, data.photoFile, err => {
            if (err)
                console.log(err);
        });
    }
}
async function deleted(data, io) {
    let updated = await model_1.default.findByIdAndUpdate(data.id, { isActive: false }, { new: true });
    io.emit('updated::training');
}
function ioTraining(socket, io) {
    socket.on('created::training', data => created(data, io));
    socket.on('updated::training', data => updated(data, io));
    socket.on('deleted::training', data => deleted(data, io));
}
exports.default = ioTraining;
