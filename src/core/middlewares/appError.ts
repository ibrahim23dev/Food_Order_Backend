export class AppError extends Error {
  public statusCode: number;
  public type?: string;

  constructor(statusCode: number, message: string, type?: string) {
    super(message);
    this.statusCode = statusCode;
    this.type = type;

    // Ensure correct prototype chain
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}
