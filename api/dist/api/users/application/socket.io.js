"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const model_1 = __importDefault(require("../domain/model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function created(data, io) {
    const userDocument = new model_1.default({ ...data, password: 'occertimm' });
    const create = await userDocument.save();
    let pathFiles = path_1.default.join(__dirname, '..', '..', '..', 'media');
    if (data.photo) {
        create.photo = `${create._id}-${data.photo}`;
        fs_1.default.writeFile(`${pathFiles}/${create.photo}`, data.photoFile, err => {
            if (err)
                console.log(err);
        });
    }
    create.save(err => {
        if (err)
            console.log(err);
        io.emit('created::user', create);
    });
}
async function updated(data, io) {
    let pathFiles = path_1.default.join(__dirname, '..', '..', '..', 'media');
    let updatedUser = await model_1.default.findByIdAndUpdate(data.id, { ...data }, { new: true });
    io.emit('updated::user');
    if (data.isPhoto) {
        fs_1.default.writeFile(`${pathFiles}/${updatedUser.photo}`, data.photoFile, err => {
            if (err)
                console.log(err);
        });
    }
}
async function deleted(data, io) {
    await model_1.default.findByIdAndUpdate(data.id, { isActive: false }, { new: true });
    io.emit('updated::user');
}
async function updatedPassword(data, io) {
    bcryptjs_1.default.genSalt(10, (err, salt) => {
        bcryptjs_1.default.hash(data.password1, salt, async (err, hash) => {
            let updated = await model_1.default.findByIdAndUpdate(data.id, { password: hash }, { new: true });
        });
    });
}
function ioUser(socket, io) {
    socket.on('created::user', data => created(data, io));
    socket.on('updated::user', data => updated(data, io));
    socket.on('deleted::user', data => deleted(data, io));
    socket.on('updated::password', data => updatedPassword(data, io));
}
exports.default = ioUser;
