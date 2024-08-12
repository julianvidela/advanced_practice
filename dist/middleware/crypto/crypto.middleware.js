"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomValue = void 0;
const crypto_1 = require("crypto");
const generateRandomValue = (length) => {
    return (0, crypto_1.randomBytes)(Math.ceil(length / 2)).toString('hex').slice(0, length);
};
exports.generateRandomValue = generateRandomValue;
//# sourceMappingURL=crypto.middleware.js.map