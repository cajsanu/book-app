import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "/api/readingList";

const create = async (userId, bookId) => {
  const ids = { userId: userId, bookId: bookId };
  const response = await axios.post(URL, ids);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${URL}/${id}`);
  return response.data;
};

export default { create, remove };
