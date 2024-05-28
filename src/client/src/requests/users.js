import axios from "axios";
const URL = "/api/users";

const getAll = async () => {
  const response = await axios.get(URL);
  return response.data;
};

const create = async (newUser) => {
  console.log(newUser);
  const response = await axios.post(URL, newUser);
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

export default { getAll, getById, create };
