"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketIO = __importStar(require("socket.io"));
const socket_io_1 = __importDefault(require("./api/users/application/socket.io"));
const socket_io_2 = __importDefault(require("./api/courses/application/socket.io"));
const socket_io_3 = __importDefault(require("./api/training/application/socket.io"));
const socket_io_4 = __importDefault(require("./api/certificate/application/socket.io"));
const socket_io_5 = __importDefault(require("./api/planning/application/socket.io"));
const socket_io_6 = __importDefault(require("./api/messages/application/socket.io"));
class SocketIo {
    constructor(config) {
        this.io = socketIO.listen(config.server);
        this.io.on('connection', socket => {
            (0, socket_io_1.default)(socket, this.io);
            (0, socket_io_2.default)(socket, this.io);
            (0, socket_io_3.default)(socket, this.io);
            (0, socket_io_4.default)(socket, this.io);
            (0, socket_io_5.default)(socket, this.io);
            (0, socket_io_6.default)(socket, this.io);
        });
    }
}
exports.default = SocketIo;
