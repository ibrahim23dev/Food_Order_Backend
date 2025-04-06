import { AuthController } from "./auth.controller";
import { Request } from "express";
import AbstractRoutes from "../../../core/abstract/abstractRouter";

export class AuthRoutes extends AbstractRoutes {
  private AuthController = new AuthController();

  constructor() {
    super();
    this.AuthController = new AuthController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/register", this.AuthController.RegisterAuth);
  }
}
