import React, { useState } from "react";

const CreateJobPage = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1 className="title">Шинээр зар нэмэх</h1>
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
              <button onClick={handleSubmit} className="button is-link">
                Оруулах
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobPage;
