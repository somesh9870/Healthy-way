import axios from "axios";

export const getUsers = async () => {
  let res = await axios.get(`http://localhost:8080/users`);
  return res.data;
};
