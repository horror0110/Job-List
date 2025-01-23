import React, { useEffect, useState } from "react";
import { createJob, getJobById, updateJob } from "../graphql/query";
import { useNavigate, useParams } from "react-router-dom";

const EditJobPage = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const { jobId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getJobById(jobId).then((data) => {
      setTitle(data.title);
      setDescription(data.description);
    });
  }, [jobId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const job = await updateJob(jobId, title, description);

    if (!job) {
      return null;
    }

    navigate(`/jobs/${job.id}`);
  };

  return (
    <div>
      <h1 className="title">Зарыг засах</h1>
      <div className="box">
        <form>
          <div className="field ">
            <div className="label">Зарын гарчиг</div>

            <div className="control">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="input"
              />
            </div>
          </div>

          <div className="field ">
            <div className="label">Зарын дэлгэрэнгүй</div>

            <div className="control">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea"
                rows={10}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button
                onClick={() => navigate(`/jobs/${jobId}`)}
                className="button is-warning"
              >
                Буцах
              </button>{" "}
              <button onClick={handleSubmit} className="button is-link">
                Хадгалах
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJobPage;
