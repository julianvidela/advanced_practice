import { IRouter, Router } from "express";
import controllers from "../controllers/user.controller";

const router: IRouter = Router();

//% Recibe un usuario:
router.get("/:email", controllers.getUserByEmail);
router.post("/email", controllers.postUser);

//localhost:3000/user?first_name=facu&last_name=alvarez
// /user?first_name=facu&last_name=alvarez

export default router;
