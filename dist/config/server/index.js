"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../../routes"));
const request_ip_1 = __importDefault(require("request-ip"));
//% Initial Methods:
const server = (0, express_1.default)();
server.set("trust proxy", true);
server.use((0, cors_1.default)());
server.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// server.name = "API";
server.use(request_ip_1.default.mw());
server.use(body_parser_1.default.urlencoded({ extended: true, limit: "1000mb" }));
server.use(body_parser_1.default.json({ limit: "1000mb" }));
// DEBUG
server.use((0, morgan_1.default)("dev"));
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, OPTIONS, PUT, DELETE");
    next();
});
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, OPTIONS, PUT, DELETE");
    next();
});
server.use("/", routes_1.default);
//$ ERROR CATCHING.
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
//$ END.
exports.default = server;
//# sourceMappingURL=index.js.map