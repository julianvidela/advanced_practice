import { Request, Response } from "express";
import User, { IUser } from "../databases/mongoose/model/user.model";

interface S {
  findUser: (email: string) => Promise<IUser>;
  createUser: (user: IUser) => Promise<IUser>;
}

class UserService {
  
  findUser: S["findUser"] = async (email) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");
    return user;
  };

  createUser: S["createUser"] = async (user) => {
    await User.findOne(user).then((user_getting) => {
      if (user_getting) throw new Error("User already exists");
    });

    const newUser = new User(user);
    await newUser.save();
    return newUser;
  };
}

const services = new UserService();
export default services;
