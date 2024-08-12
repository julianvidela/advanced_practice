"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = (0, express_1.Router)();
//% Recibe un usuario:
router.get("/:email", user_controller_1.default.getUserByEmail);
router.post("/email", user_controller_1.default.postUser);
//localhost:3000/user?first_name=facu&last_name=alvarez
// /user?first_name=facu&last_name=alvarez
exports.default = router;
//# sourceMappingURL=user.route.js.map