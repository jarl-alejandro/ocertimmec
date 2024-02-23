"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const api_1 = __importDefault(require("./api/users/application/api"));
const api_2 = __importDefault(require("./api/courses/application/api"));
const api_3 = __importDefault(require("./api/training/application/api"));
const api_4 = __importDefault(require("./api/certificate/application/api"));
const api_5 = __importDefault(require("./api/planning/application/api"));
const routerReports_1 = __importDefault(require("./api/managementSystemForms/infrastructure/routerReports"));
const api_6 = __importDefault(require("./api/messages/application/api"));
const reportCerficateOnAssisence_1 = __importDefault(require("./api/training/infrastructure/report/reportCerficateOnAssisence"));
const excel_1 = __importDefault(require("./excel"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)('*'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('API of occertimm'));
app.get('/media/:imagen', (req, res) => {
    let imagen = req.params.imagen;
    let photo = path_1.default.join(__dirname, '..', 'media', `${imagen}`);
    let rs = fs_1.default.createReadStream(photo);
    rs.pipe(res);
    rs.on('error', function (err) {
        res.send(err.message);
    });
});
app.get('/font/:fontName', (req, res) => {
    let photo = path_1.default.join(__dirname, 'font', req.params.fontName);
    let rs = fs_1.default.createReadStream(photo);
    rs.pipe(res);
    rs.on('error', function (err) {
        res.send(err.message);
    });
});
app.get('/fuentes', (req, res) => {
    let photo = path_1.default.join(__dirname, 'fonts.ttf');
    let rs = fs_1.default.createReadStream(photo);
    rs.pipe(res);
    rs.on('error', function (err) {
        res.send(err.message);
    });
});
app.get('/logo/occertimm', (req, res) => {
    let photo = path_1.default.join(__dirname, 'logo.png');
    let rs = fs_1.default.createReadStream(photo);
    rs.pipe(res);
    rs.on('error', function (err) {
        res.send(err.message);
    });
});
app.get('/fotos-pdf/:foto', (req, res) => {
    let photo = path_1.default.join(__dirname, 'fotospdf', req.params.foto);
    let rs = fs_1.default.createReadStream(photo);
    rs.pipe(res);
    rs.on('error', function (err) {
        res.send(err.message);
    });
});
app.get('/excel', excel_1.default);
app.use(api_1.default);
app.use(api_2.default);
app.use(api_3.default);
app.use(api_4.default);
app.use(api_5.default);
app.use(routerReports_1.default);
app.use(api_6.default);
app.use(reportCerficateOnAssisence_1.default);
exports.default = app;
