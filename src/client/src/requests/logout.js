import axios from "axios";
const URL = "/api/logout";

export const logout = async () => {
  try {
    const loggedUser = window.localStorage.getItem("loggedInUser");
    const user = JSON.parse(loggedUser)
    const token = user.token;
    console.log(user.token)
    const response = await axios.delete(URL, {
      headers: { Authorization: `bearer ${token}`},
    });
    window.localStorage.removeItem("loggedInUser");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
