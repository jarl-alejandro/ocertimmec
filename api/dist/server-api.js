"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./enviroments/config"));
const SocketIO_1 = require("./SocketIO");
const portAPI = process.env.PORT || 8001;
const portWS = process.env.PORT || 8002;
const server = http_1.default.createServer(app_1.default);
new SocketIO_1.SocketIO({ server: server });
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(config_1.default.DB)
    .then(() => {
    console.log(`🎉 Conectado a la mongoDB: ${config_1.default.DB} `);
    app_1.default.listen(portAPI, () => {
        console.log(`🚀 Server running in port ${portAPI}`);
    });
    server.listen(portWS, () => {
        console.log(`🚀 Server ws running in port ${portWS}`);
    });
});
