"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractModels = void 0;
const cache_1 = __importDefault(require("../utility/cache"));
class AbstractModels {
    constructor(db, trx) {
        this.db = trx || db;
        this.cache = cache_1.default.getInstance();
    }
}
exports.AbstractModels = AbstractModels;
