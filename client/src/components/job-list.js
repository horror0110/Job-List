import React from "react";
import JobItem from "./job-item";

const JobList = ({ jobs }) => {
  return (
    <ul className="box">
      {jobs.map((job, index) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
};

export default JobList;
