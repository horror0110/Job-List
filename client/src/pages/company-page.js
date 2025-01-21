import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyById } from "../graphql/query";
import JobList from "../components/job-list";

const CompanyPage = () => {
  const { companyId } = useParams();

  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompanyById(companyId).then((data) => setCompany(data));
  }, [companyId]);

  console.log(company)

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="title ">{company.name}</h1>
      <div className="box">{company.description}</div>

      <h2 className="title is-5">Бидний санал болгож буй ажлын байрууд</h2>

      <JobList jobs={company.jobs} />
    </div>
  );
};

export default CompanyPage;
