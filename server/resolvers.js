import { GraphQLError } from "graphql";
import { getCompanyById } from "./controllers/company.js";
import {
  createJob,
  deleteJob,
  getJobById,
  getJobs,
  getJobsByCompanyId,
  updateJob,
} from "./controllers/jobs.js";

export const resolvers = {
  Mutation: {
    createJob: (root, { input: { title, description } }, { user }) => {
      if (!user) {
        throwUnauthenticated(
          "Зарыг үүсгэхийн тулд та логин хийсэн байх хэрэгтэй"
        );
      }

      return createJob(user.companyId, title, description);
    },
    deleteJob: (root, { id }) => deleteJob(id),
    updateJob: (root, { input: { id, title, description } }) =>
      updateJob(id, title, description),
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

const throwUnauthenticated = (message) => {
  throw new GraphQLError(message, {
    extensions: { code: "UNAUTHENTICATED" },
  });
};
