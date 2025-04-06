"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractServices = void 0;
const models_1 = __importDefault(require("../common/models"));
const db_1 = __importDefault(require("../database/db"));
const appError_1 = require("../middlewares/appError");
const statusCode_1 = __importDefault(require("../miscellanious/statusCode"));
const cache_1 = __importDefault(require("../utility/cache"));
class AbstractServices {
    constructor() {
        this.db = db_1.default;
        this.status = statusCode_1.default;
        this.cache = cache_1.default.getInstance();
        this.model = new models_1.default();
        this.error = (code, message) => {
            return new appError_1.AppError(code, message);
        };
    }
}
exports.AbstractServices = AbstractServices;
exports.default = AbstractServices;
