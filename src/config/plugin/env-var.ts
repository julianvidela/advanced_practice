import "dotenv/config";
import * as env from "env-var";

//bay
export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  PROD: env.get("PROD").required().asBool(),
  BACK_TESTING: env.get("BACK_TESTING").required().asBool(),

  MONGODB_URI: env.get("MONGODB_URI").required().asString(),
  MONGO_DB_NAME: env.get("MONGO_DB_NAME").required().asString(),
  MONGO_USER: env.get("MONGO_USER").required().asString(),
  MONGO_PASS: env.get("MONGO_PASS").required().asString(),
  // MONGO_BASICAUTH: env.get("MONGO_BASICAUTH").required().asBool(),

  INITIALDROPDB: env.get("INITIALDROPDB").required().asBool(),
  CONNECTDB: env.get("CONNECTDB").required().asBool(),
};
