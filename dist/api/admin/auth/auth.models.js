"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const abstractModels_1 = require("../../../core/abstract/abstractModels");
class userModel extends abstractModels_1.AbstractModels {
    constructor() {
        super(...arguments);
        this.RegisterUser = async () => {
            return await this.db("users").select("*");
        };
    }
}
exports.userModel = userModel;
