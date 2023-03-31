import axios from "axios";

export const getUsers = async () => {
  let res = await axios.get(`https://panicky-crow-cardigan.cyclic.app/users`);
  return res.data;
};

export const deleteUser = async (userId) => {
  let res = await axios.delete(
    `https://panicky-crow-cardigan.cyclic.app/users/${userId}`
  );
  return res;
};

export const getnutriData = async () => {
  let res = await axios.get(
    `https://panicky-crow-cardigan.cyclic.app/nutrient/list`
  );
  return res.data;
};

export const deleteNutriData = async (nutriId) => {
  let res = await axios.delete(
    `https://panicky-crow-cardigan.cyclic.app/nutrient/delete/${nutriId}`,
    {
      headers: {
        Authorization: `${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return res;
};

export const addnutriData = async (data) => {
  let res = await axios.post(
    `https://panicky-crow-cardigan.cyclic.app/nutrient/add`,
    data,
    {
      headers: {
        Authorization: `${localStorage.getItem("adminToken")}`,
      },
    }
  );
  return res;
};

export const updateNutriData = async (nutriId, data) => {
  let res = await axios.patch(
    `https://panicky-crow-cardigan.cyclic.app/nutrient/update/${nutriId}`,
    data,
    {
      headers: {
        Authorization: `${localStorage.getItem("adminToken")}`,
      },
    }
  );

  return res.data;
};
