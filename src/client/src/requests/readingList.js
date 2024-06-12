import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "/api/readingList";

const create = async (userId, bookId) => {
  const ids = { userId: userId, bookId: bookId };
  const response = await axios.post(URL, ids);
  return response.data;
};

export default { create };
