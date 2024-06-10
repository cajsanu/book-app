import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "/api/logout";

export const logout = async () => {
  try {
    window.localStorage.setItem("user", null);
    const response = await axios.delete(URL);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
