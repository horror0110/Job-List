import React, { useEffect, useState } from "react";
import JobList from "../components/job-list";
import { getJobs } from "../graphql/query";

const HomePage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then((data) => setJobs(data));
  }, []);

  if (jobs.length < 1) return <div>Одоогоор зар байхгүй</div>;

  return (
    <div className="">
      <h1 className="title">Ажлын зар</h1>

      <JobList jobs={jobs} />
    </div>
  );
};

export default HomePage;
