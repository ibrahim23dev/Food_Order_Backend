"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractServices_1 = __importDefault(require("../../../core/abstract/abstractServices"));
class AuthServices extends abstractServices_1.default {
    constructor() {
        super(...arguments);
        this.RegisterUser = async (req) => {
            // Implement user registration logic here
            return { message: "User registered successfully" };
        };
    }
}
exports.default = AuthServices;
