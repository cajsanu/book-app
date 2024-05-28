import axios from "axios";
const URL = "/api/login";

export const login = async (credentials) => {
  console.log(credentials);
  const response = await axios.post(URL, credentials);
  console.log(response.data)
  return response.data;
};
