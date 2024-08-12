"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCookies = exports.startSocket = void 0;
const socket_io_1 = require("socket.io");
// Crear una instancia del servidor de Socket.IO
const io = new socket_io_1.Server();
const startSocket = () => {
    // Manejar la conexión de un cliente
    io.on("connection", (socket) => {
    });
    // Iniciar el servidor de Socket.IO
    io.listen(3002);
};
exports.startSocket = startSocket;
//
const sendCookies = (cookie) => {
    io.emit("session", { cookie });
};
exports.sendCookies = sendCookies;
//# sourceMappingURL=index.js.map