"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema = new mongoose_1.Schema({
    cedula: String,
    name: String,
    email: {
        type: String,
        unique: true,
        default: ''
    },
    password: { type: String, default: 'occertimm' },
    photo: String,
    roles: String,
    workExperience: String,
    levelInstruction: String,
    teachingExperience: String,
    trainingProfile: String,
    trainingPedagogy: String,
    isActive: { type: Boolean, default: true }
});
UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    bcryptjs_1.default.genSalt(10, (err, salt) => {
        bcryptjs_1.default.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            next();
        });
    });
});
UserSchema.methods.comparePassword = function (password, done) {
    bcryptjs_1.default.compare(password, this.password, function (err, isMatch) {
        done(err, isMatch);
    });
};
exports.default = (0, mongoose_1.model)('Users', UserSchema, 'Users');
