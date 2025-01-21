import { getCompanyById } from "./controllers/company.js";
import { createJob, getJobById, getJobs, getJobsByCompanyId } from "./controllers/jobs.js";

export const resolvers = {


  Mutation: {

    createJob: (root , {title , description})=> {

      const companyId = "FjcJCHJALA4i"
       return createJob(companyId , title , description)
    }

  },

  Query: {
    jobs: () => getJobs(),
    job: async (root, { id }) => getJobById(id),
    company: async (root, { id }) => getCompanyById(id),
  },
  Job: {
    date: (root) => root.createdAt.slice(0, "yyyy-mm-dd".length),
    company: (root) => getCompanyById(root.companyId),
  },
  Company: {
    jobs: (root) => getJobsByCompanyId(root.id),
  },
};
