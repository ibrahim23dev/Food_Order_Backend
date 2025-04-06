import { Request } from "express";
import AbstractController from "../../../core/abstract/abstractController";
import AuthServices from "./auth.services";
export class AuthController extends AbstractController {
  private authServices = new AuthServices();

  RegisterAuth = this.asyncWrapper.wrap(async (req: Request) => {
    const result = await this.authServices.RegisterUser(req);
    return result;
  });
}
