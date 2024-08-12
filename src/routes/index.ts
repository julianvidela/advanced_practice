import { IRouter, Router } from "express";
import User from "../databases/mongoose/model/user.model";
import UserRoute from "./user.route";

const route: IRouter = Router();

route.use("/user", UserRoute);

route.post("/test/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const { brand, model } = req.query;
    const { user: { email, password }  } = req.body;

    if (!productId) throw new Error("productId is required");

    res.send({ email, password, productId, brand, model });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

route.get("/", async (req, res) => {
  res.send("working");
});

export default route;
