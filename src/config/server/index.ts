import express, {
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import { envs } from "../plugin/env-var";
import passport from "passport";
import route from "../../routes";
import { v4 as uuid } from "uuid";
import requestIp from "request-ip";
import { sendCookies } from "../../sockets";

//% Initial Methods:
const server: Express = express();
server.set("trust proxy", true);
server.use(cors());

server.use(express.static(path.join(__dirname, "public")));
// server.name = "API";
server.use(requestIp.mw());

server.use(bodyParser.urlencoded({ extended: true, limit: "1000mb" }));
server.use(bodyParser.json({ limit: "1000mb" }));

// DEBUG
server.use(morgan("dev"));
server.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, POST, OPTIONS, PUT, DELETE"
  );
  next();
});


server.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, POST, OPTIONS, PUT, DELETE"
  );
  next();
});

server.use("/", route);

//$ ERROR CATCHING.
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

//$ END.

export default server;
