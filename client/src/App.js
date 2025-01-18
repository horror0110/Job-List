import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import JobPage from "./pages/job-page";
import CompanyPage from "./pages/company-page";
import LoginPage from "./pages/login-page";
import { useState } from "react";
import Navbar from "./components/navbar";
import CreateJobPage from "./pages/create-job-page";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  return (
    <>
      <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <main className="section ">
        <Routes>
          <Route index path="/" element={<HomePage />}></Route>

          <Route path="/jobs/new" element={<CreateJobPage />}></Route>

          <Route path="/jobs/:jobId" element={<JobPage />}></Route>

          <Route path="/company/:companyId" element={<CompanyPage />}></Route>

          <Route
            path="/login"
            element={<LoginPage setLoggedUser={setLoggedUser} />}
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
