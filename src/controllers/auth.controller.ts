import { Request as Req, Response as Res } from "express";
class AuthController {
  getUserByEmail = async (req: Req, res: Res) => {
    try {
      res.send("auth");
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  };

  postExample = async (req: Req, res: Res) => {
    try {
      res.send("work");
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  };
}

const controllers = new AuthController();
export default controllers;
