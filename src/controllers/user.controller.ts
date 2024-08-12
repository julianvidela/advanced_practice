import { Request as Req, Response as Res } from "express";
import UserService from "../services/user.service";

class UserController {
  
  getUserByEmail = async ({ params: { email } }: Req, res: Res) => {
    try {
      const userGetting = await UserService.findUser(email);
      res.send(userGetting);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  };

  postUser = async ({ body: { name, email } }: Req, res: Res) => {
    try {
      const userCreating = await UserService.createUser({ name, email });
      
      res.send(userCreating);
    } catch (error) {
      res.status(404).send({ message: error.message });
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

const controllers = new UserController();
export default controllers;
