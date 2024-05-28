import axios from "axios";
const URL = "/api/logout";

export const logout = async () => {
  try {
    const user = window.localStorage.getItem("loggedInUser");
    const token = user.token;
    console.log(user.token)
    const response = await axios.delete(URL, {
      headers: { authorization: `Bearer ${token}`},
    });
    window.localStorage.removeItem("loggedInUser");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
