import { getCompanyById } from "./controllers/company.js";
import { getJobById, getJobs } from "./controllers/jobs.js";

export const resolvers = {
  Query: {
    jobs: () => getJobs(),
    job: async (root, { id }) =>  getJobById(id),
    company: async (root, { id }) =>  getCompanyById(id),
  },

  Job: {
    date: (root) => root.createdAt.slice(0, "yyyy-mm-dd".length),
    company: (root) => getCompanyById(root.companyId),
  },
};
