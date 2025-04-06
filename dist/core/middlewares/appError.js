"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(statusCode, message, type) {
        super(message);
        this.statusCode = statusCode;
        this.type = type;
        // Ensure correct prototype chain
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AppError);
        }
    }
}
exports.AppError = AppError;
