import { Router } from "express";
import { UserAuthRoutes } from "./admin/admin.routes";

const routes = Router();

routes.use("/auth", new UserAuthRoutes().router);

export default routes;
