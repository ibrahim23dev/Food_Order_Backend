"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const appError_1 = require("./appError");
class Wrapper {
    wrap(fn, schema) {
        return async (req, res, next) => {
            try {
                if (schema) {
                    await schema.validateAsync(req.body, { abortEarly: false });
                }
                await fn(req, res, next);
            }
            catch (error) {
                const statusCode = error?.statusCode || (schema ? 400 : 500);
                const message = error?.message ||
                    (schema ? "Validation error" : "Internal Server Error");
                const routine = error?.routine;
                next(new appError_1.AppError(statusCode, message, routine));
            }
        };
    }
}
exports.Wrapper = Wrapper;
