import React from "react";
import { Link } from "react-router-dom";

const JobItem = ({ job }) => {
  return (
    <li className="media">
      <div className="media-left has-text-grey">{job.date}</div>
      <div className="media-content">
        <Link className="has-text-link" to={`/jobs/${job.id}`}>
          {job.title} - {job.company.name}
        </Link>
      </div>
    </li>
  );
};

export default JobItem;
