import { AbstractModels } from "../../core/abstract/abstractModels";

export class PublicModel extends AbstractModels {
  selectAirports = async (search?: string) => {
    return await this.db("airports")
      .select("id", "name", "iata_code", "city")
      .modify((e) => {
        if (search) {
          e.select(
            this.db.raw(
              `
            (
              CASE 
                WHEN lower(city) LIKE ? THEN 3
                WHEN lower(iata_code) LIKE ? THEN 2
                WHEN lower(name) LIKE ? THEN 1
                ELSE 0
              END
            ) AS relevance_score
          `,
              [`%${search}%`, `%${search}%`, `%${search}%`]
            )
          )
            .whereRaw("lower(name) LIKE ?", [`%${search}%`])
            .orWhereRaw("lower(iata_code) LIKE ?", [`%${search}%`])
            .orWhereRaw("lower(city) LIKE ?", [`%${search}%`])
            .orderBy("relevance_score", "desc");
        } else {
          e.orderBy("name");
        }
      })
      .limit(25);
  };
}
