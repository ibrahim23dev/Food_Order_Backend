import StatusCode from "../miscellanious/statusCode";
import { Wrapper } from "../middlewares/asyncWrapper";

abstract class AbstractController {
  protected asyncWrapper: Wrapper;
  constructor() {
    this.asyncWrapper = new Wrapper();
  }
  protected status = StatusCode;
}
export default AbstractController;
