import axios from "axios";

export const getUsers = async () => {
  let res = await axios.get(`http://localhost:8080/users`);
  return res.data;
};

export const deleteUser = async (userId) => {
  let res = await axios.delete(`http://localhost:8080/users/${userId}`);
  return res;
};

export const getnutriData = async () => {
  let res = await axios.get(`http://localhost:8080/nutridata`);
  return res.data;
};

export const deleteNutriData = async (nutriId) => {
  let res = await axios.delete(`http://localhost:8080/nutridata/${nutriId}`);
  return res;
};

export const addnutriData = async (data) => {
  let res = await axios.post(`http://localhost:8080/nutridata`, data);
  return res.data;
};

export const updateNutriData = async (nutriId, data) => {
  let res = await axios.patch(
    `http://localhost:8080/nutridata/${nutriId}`,
    data
  );
  return res.data;
};
