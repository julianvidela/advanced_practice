"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor() {
        this.getUserByEmail = ({ params: { email } }, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userGetting = yield user_service_1.default.findUser(email);
                res.send(userGetting);
            }
            catch (error) {
                res.status(404).send({ message: error.message });
            }
        });
        this.postUser = ({ body: { name, email } }, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userCreating = yield user_service_1.default.createUser({ name, email });
                res.send(userCreating);
            }
            catch (error) {
                res.status(404).send({ message: error.message });
            }
        });
        this.postExample = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("work");
            }
            catch (error) {
                res.status(404).send({ error: error.message });
            }
        });
    }
}
const controllers = new UserController();
exports.default = controllers;
//# sourceMappingURL=user.controller.js.map