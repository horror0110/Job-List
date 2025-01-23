import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:9000";
export const login = async (email, password) => {
  const response = await fetch(API_URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return null;
  }

  const { token } = await response.json();

  localStorage.setItem("job_api_token", token);

  const data = jwtDecode(token);

  return {
    id: data.sub,
    email: data.name,
    companyId: data.companyId,
  };
};
