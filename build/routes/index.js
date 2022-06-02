"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const capsulesRouter_1 = __importDefault(require("./capsules/capsulesRouter"));
const memoryRouter_1 = __importDefault(require("./memory/memoryRouter"));
const userRouter_1 = __importDefault(require("./user/userRouter"));
const multer_1 = __importDefault(require("../util/multer"));
exports.router = (0, express_1.Router)();
exports.router.use('/capsule', capsulesRouter_1.default);
exports.router.use('/memory', multer_1.default.array('memoryImg'), memoryRouter_1.default);
exports.router.use('/user', userRouter_1.default);
//# sourceMappingURL=index.js.map