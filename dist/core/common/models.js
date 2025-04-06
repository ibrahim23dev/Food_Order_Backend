"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const public_models_1 = require("../../api/public/public.models");
const db_1 = __importDefault(require("../database/db"));
class Models {
    public(trx) {
        return new public_models_1.PublicModel(db_1.default, trx);
    }
}
exports.default = Models;
