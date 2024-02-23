"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const socket_io_1 = __importDefault(require("./socket.io"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const port = process.env.PORT || 8001;
const server = http_1.default.createServer(app_1.default);
new socket_io_1.default({ server });
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(config_1.default.DB, { useNewUrlParser: true })
    .then(() => {
    console.log(`🎉 Conectado a la mongoDB: ${config_1.default.DB} `);
    server.listen(port, () => console.log(`🚀 Server running in port ${port}`));
});
