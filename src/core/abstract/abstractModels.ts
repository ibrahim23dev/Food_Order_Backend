import { Knex } from "knex";
import Cache from "../utility/cache";

export class AbstractModels {
  protected cache: Cache;
  protected db: Knex<any, unknown[]>;
  constructor(db: Knex<any, unknown[]>, trx?: Knex.Transaction) {
    this.db = trx || db;
    this.cache = Cache.getInstance();
  }
}
