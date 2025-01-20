import knex from "../lib/db.js"

export const getJobs = async()=>{
    return await knex.table("job").select();
}

export const getJobById = async(id)=> {
   return await knex.table("job").first().where({id})
}