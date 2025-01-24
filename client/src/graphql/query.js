import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql", {
  headers: () => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("job_api_token");
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
    return {};
  },
});

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

export const updateJob = async (id, title, description) => {
  const mutation = gql`
    mutation updateJob($input: UpdateJobInput) {
      job: updateJob(input: $input) {
        id
        title
        description
      }
    }
  `;

  const { job } = await client.request(mutation, {
    input: { id, title, description },
  });

  return job;
};

export const deleteJob = async (id) => {
  const mutation = gql`
    mutation deleteJob($id: String!) {
      job: deleteJob(id: $id) {
        id
        title
        description
      }
    }
  `;

  const { job } = await client.request(mutation, {
    id,
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
