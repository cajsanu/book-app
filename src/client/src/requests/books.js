import axios from "axios";
axios.defaults.withCredentials = true
const URL = "/api/books";

const getAll = async () => {
  const response = await axios.get(URL);
  return response.data;
};

const create = async (newBook) => {
  const response = await axios.post(URL, newBook);
  console.log(response.data)
  return response.data;
};

const getByBookId = async (id) => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

export default { getAll, create, getByBookId };
