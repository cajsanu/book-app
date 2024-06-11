import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "/api/login";

export const login = async (credentials) => {
  const response = await axios.post(URL, credentials);
  window.localStorage.setItem(
    "user",
    JSON.stringify({ userId: response.data.id })
  );
  return response.data;
};

