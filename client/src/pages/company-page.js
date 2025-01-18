import React from "react";
import { companies } from "../lib/data";
import { useParams } from "react-router-dom";

const CompanyPage = () => {
  const { companyId } = useParams();

  const company = companies.find((company) => company.id === companyId);

  return (
    <div>
      <div className="title ">{company.name}</div>
      <div className="box">{company.description}</div>
    </div>
  );
};

export default CompanyPage;
