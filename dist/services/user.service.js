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
const user_model_1 = __importDefault(require("../databases/mongoose/model/user.model"));
class UserService {
    constructor() {
        this.findUser = (email) => __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.default.findOne({ email });
            if (!user)
                throw new Error("User not found");
            return user;
        });
        this.createUser = (user) => __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.default.findOne(user).then((user_getting) => {
                if (user_getting)
                    throw new Error("User already exists");
            });
            const newUser = new user_model_1.default(user);
            yield newUser.save();
            return newUser;
        });
    }
}
const services = new UserService();
exports.default = services;
//# sourceMappingURL=user.service.js.map