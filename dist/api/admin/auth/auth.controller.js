"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const abstractController_1 = __importDefault(require("../../../core/abstract/abstractController"));
const auth_services_1 = __importDefault(require("./auth.services"));
class AuthController extends abstractController_1.default {
    constructor() {
        super(...arguments);
        this.authServices = new auth_services_1.default();
        this.RegisterAuth = this.asyncWrapper.wrap(async (req) => {
            const result = await this.authServices.RegisterUser(req);
            return result;
        });
    }
}
exports.AuthController = AuthController;
