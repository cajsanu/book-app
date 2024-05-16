import axios from "axios";
const URL = "api/ping";

const getAll = async () => {
  const response = await axios.get(URL);
  return response.data;
};

export default { getAll };
