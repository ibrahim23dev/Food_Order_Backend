import { AbstractModels } from "../../../core/abstract/abstractModels";
import { Iuser } from "./utiles/auth.interfaces";

export class userModel extends AbstractModels {
  RegisterUser = async (): Promise<Iuser[]> => {
    return await this.db("users").select("*");
  };
}
