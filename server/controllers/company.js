import knex from "../lib/db.js"

export const getCompanyById =async (id)=> {
   
    return await knex.table("company").first().where({id:id});
  
} 