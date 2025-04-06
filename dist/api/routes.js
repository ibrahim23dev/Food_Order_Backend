"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_routes_1 = require("./admin/admin.routes");
const routes = (0, express_1.Router)();
routes.use("/auth", new admin_routes_1.UserAuthRoutes().router);
exports.default = routes;
