import { Request } from "express";
import AbstractServices from "../../../core/abstract/abstractServices";

export default class AuthServices extends AbstractServices {
  RegisterUser = async (req: Request) => {
    // Implement user registration logic here
    return { message: "User registered successfully" };
  };
}
