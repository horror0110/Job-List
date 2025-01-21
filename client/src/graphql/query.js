import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql");

export const createJob = async (title, description) => {
  const mutation = gql`
    mutation createJob($input: CreateJobInput) {
      job: createJob(input: $input) {
        id
      }
    }
  `;

  const { job } = await client.request(mutation, {
    input: { title, description },
  });

  return job;
};

export const getJobById = async (id) => {
  const query = gql`
    query ($jobId: ID!) {
      job(id: $jobId) {
        title
        description
        date
        company {
          id
          name
        }
      }
    }
  `;
  const { job } = await client.request(query, { jobId: id });
  return job;
};

export const getJobs = async () => {
  const query = gql`
    {
      jobs {
        id
        title
        description
        date
        company {
          id
          name
        }
      }
    }
  `;

  const { jobs } = await client.request(query);

  return jobs;
};

export const getCompanyById = async (id) => {
  const query = gql`
    query ($companyId: ID!) {
      company(id: $companyId) {
        name
        description
        jobs {
          id
          title
          description
          date
          company {
            id
            name
          }
        }
      }
    }
  `;
  const { company } = await client.request(query, { companyId: id });
  return company;
};
