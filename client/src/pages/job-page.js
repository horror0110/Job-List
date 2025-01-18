import React from "react";
import { Link, useParams } from "react-router-dom";
import { jobs } from "../lib/data";

const JobPage = () => {
  const { jobId } = useParams();

  const job = jobs.find((job) => job.id === jobId);

  return (
    <div>
      <h1 className="title is-3">{job.title}</h1>
      <h2 className="subtitle is-5">
        <Link className="has-text-link" to={`/company/${job.company.id}`}>
          {job.company.name}
        </Link>
      </h2>

      <div className="box">
        <div className="block has-text-grey">Нийтэлсэн: {job.date}</div>
        <div className="block">{job.description}</div>
      </div>
    </div>
  );
};

export default JobPage;
