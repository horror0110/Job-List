import knex from "../lib/db.js";

export const getUserByEmail = async (email) => {
  return await knex.table("user").first().where({ email: email });
};
