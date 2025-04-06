import Models from "../common/models";
import db from "../database/db";
import { AppError } from "../middlewares/appError";
import StatusCode from "../miscellanious/statusCode";
import Cache from "../utility/cache";

export abstract class AbstractServices {
  protected db = db;
  protected status = StatusCode;
  protected cache = Cache.getInstance();
  protected model = new Models();
  protected error = (code: number, message: string) => {
    return new AppError(code, message);
  };
}

export default AbstractServices;
