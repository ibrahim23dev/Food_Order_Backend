import { Knex } from "knex";
import { PublicModel } from "../../api/public/public.models";
import db from "../database/db";

class Models {
  public public(trx?: Knex.Transaction) {
    return new PublicModel(db, trx);
  }
}
export default Models;
