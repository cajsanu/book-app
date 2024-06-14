import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "/api/readList";

const getReadBooks = async () => {
  const response = await axios.get(URL);
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

const updateComment = async (id, comment) => {
  const response = await axios.put(`${URL}/${id}`, comment);
  return response.data;
};

const create = async (userId, bookId) => {
  const ids = { userId: userId, bookId: bookId };
  const response = await axios.post(URL, ids);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${URL}/${id}`);
  return response.data;
};

export default { getReadBooks, getById, create, remove, updateComment };
