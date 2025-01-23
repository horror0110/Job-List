import knex from "../lib/db.js";
import { customAlphabet } from "nanoid";

const chars = "0123456789ABCDEFGHIJKLMN";

export const createJob = async (companyId, title, description) => {
  const newJob = {
    id: customAlphabet(chars, 12)(),
    companyId,
    title,
    description,
    createdAt: new Date().toISOString(),
  };

  await knex.table("job").insert(newJob);

  return newJob;
};

export const deleteJob = async (id) => {
  const job = await knex.table("job").first().where({ id });

  if (!job) {
    throw Error(`${id} тэй зар байхгүй`);
  }
  await knex.table("job").delete().where({ id });

  return job;
};

export const updateJob = async (id, title, description) => {
  const updatedJob = {
    id,
    title,
    description,
  };

  const job = await knex.table("job").first().where({ id });

  if (!job) {
    throw Error(`${id} тэй зар байхгүй`);
  }

  await knex.table("job").update(updatedJob).where({ id });

  return { ...job, ...updatedJob };
};

export const getJobsByCompanyId = async (companyId) => {
  return await knex.table("job").select().where({ companyId });
};

export const getJobs = async () => {
  return await knex.table("job").select();
};

export const getJobById = async (id) => {
  return await knex.table("job").first().where({ id });
};
