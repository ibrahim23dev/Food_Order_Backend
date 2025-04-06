"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCode_1 = __importDefault(require("../miscellanious/statusCode"));
const asyncWrapper_1 = require("../middlewares/asyncWrapper");
class AbstractController {
    constructor() {
        this.status = statusCode_1.default;
        this.asyncWrapper = new asyncWrapper_1.Wrapper();
    }
}
exports.default = AbstractController;
