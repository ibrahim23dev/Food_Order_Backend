"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthRoutes = void 0;
const abstractRouter_1 = __importDefault(require("../../core/abstract/abstractRouter"));
const auth_routes_1 = require("./auth/auth.routes");
class UserAuthRoutes extends abstractRouter_1.default {
    constructor() {
        super();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.use("/auth", new auth_routes_1.AuthRoutes().router);
    }
}
exports.UserAuthRoutes = UserAuthRoutes;
