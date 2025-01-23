import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteJob, getJobById } from "../graphql/query";

const JobPage = ({ loggedUser }) => {
  const { jobId } = useParams();

  const [job, setJob] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getJobById(jobId).then((data) => setJob(data));
  }, [jobId]);

  const modalClass = showModal ? "is-active" : "is-close";

  const handleDelete = async (e) => {
    e.preventDefault();

    const job = await deleteJob(jobId);

    navigate("/");
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  console.log(job.company.id);

  return (
    <div>
      <div className={`modal ${modalClass}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Анхаар!</p>
            <button
              onClick={() => setShowModal(false)}
              className="delete"
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            Та энэ зарыг устгахдаа итгэлтэй байна уу?
          </section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button onClick={handleDelete} className="button is-danger">
                Зарыг устга
              </button>
              <button onClick={() => setShowModal(false)} className="button ">
                Болих
              </button>
            </div>
          </footer>
        </div>
      </div>
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
      {loggedUser && job.company.id === loggedUser.companyId && (
        <>
          <button
            onClick={() => setShowModal(true)}
            className="button is-light is-danger"
          >
            Устга
          </button>{" "}
          <button className="button is-link" onClick={()=> navigate(`/jobs/edit/${jobId}`)}>Засах</button>
        </>
      )}
    </div>
  );
};

export default JobPage;
