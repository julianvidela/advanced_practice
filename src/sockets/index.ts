import { Server, Socket } from "socket.io";

// Crear una instancia del servidor de Socket.IO
const io = new Server();

export const startSocket = () => {
  // Manejar la conexión de un cliente
  io.on("connection", (socket: Socket) => {
  });

  // Iniciar el servidor de Socket.IO
  io.listen(3002);
};
//
export const sendCookies = (cookie: any) => {
  io.emit("session", { cookie });
};
