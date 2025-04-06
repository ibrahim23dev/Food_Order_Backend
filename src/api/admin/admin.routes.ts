import AbstractRoutes from "../../core/abstract/abstractRouter";
import { AuthRoutes } from "./auth/auth.routes";

export class UserAuthRoutes extends AbstractRoutes {
  constructor() {
    super();
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.use("/auth", new AuthRoutes().router);
  }
}
