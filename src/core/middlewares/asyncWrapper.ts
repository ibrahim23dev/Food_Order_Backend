import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { AppError } from "./appError";

export class Wrapper {
  wrap(fn: Function, schema?: Joi.ObjectSchema) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (schema) {
          await schema.validateAsync(req.body, { abortEarly: false });
        }
        await fn(req, res, next);
      } catch (error: any) {
        const statusCode = error?.statusCode || (schema ? 400 : 500);
        const message =
          error?.message ||
          (schema ? "Validation error" : "Internal Server Error");
        const routine = error?.routine;

        next(new AppError(statusCode, message, routine));
      }
    };
  }
}
