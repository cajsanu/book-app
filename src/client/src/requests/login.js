import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "/api/login";

export const login = async (credentials) => {
  const response = await axios.post(URL, credentials);
  window.localStorage.setItem("user", JSON.stringify({ userId: response.data.id }));
  return response.data;
};

// what happens when the token expires? the local storage should be put to false and user redirected to login
