import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "/api/books";

const getAll = async (search) => {
  const response = await axios.get(`${URL}?search=${search}`);
  return response.data;
};

const create = async (newBook) => {
  const response = await axios.post(URL, newBook);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${URL}/${id}`);
  return response.data;
};

const getByBookId = async (id) => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

const updateComment = async (id, book) => {
  const response = await axios.put(`${URL}/${id}`, book);
  return response.data;
};

export default { getAll, create, getByBookId, remove, updateComment };
