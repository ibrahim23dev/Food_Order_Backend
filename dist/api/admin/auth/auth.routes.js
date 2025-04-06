"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const auth_controller_1 = require("./auth.controller");
const abstractRouter_1 = __importDefault(require("../../../core/abstract/abstractRouter"));
class AuthRoutes extends abstractRouter_1.default {
    constructor() {
        super();
        this.AuthController = new auth_controller_1.AuthController();
        this.AuthController = new auth_controller_1.AuthController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/register", this.AuthController.RegisterAuth);
    }
}
exports.AuthRoutes = AuthRoutes;
