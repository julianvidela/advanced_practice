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
const express_1 = require("express");
const user_route_1 = __importDefault(require("./user.route"));
const route = (0, express_1.Router)();
route.use("/user", user_route_1.default);
route.post("/test/:productId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const { brand, model } = req.query;
        const { user: { email, password } } = req.body;
        if (!productId)
            throw new Error("productId is required");
        res.send({ email, password, productId, brand, model });
    }
    catch (error) {
        res.status(404).send({ message: error.message });
    }
}));
route.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("working");
}));
exports.default = route;
//# sourceMappingURL=index.js.map