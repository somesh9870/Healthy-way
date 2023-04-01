import {
  ADMIN_ADD_NUTRIDATA_ERROR,
  ADMIN_ADD_NUTRIDATA_LOADING,
  ADMIN_AUTH_LOGOUT,
  ADMIN_DELETEUSRS,
  ADMIN_DELETE_ERROR,
  ADMIN_DELETE_LOADING,
  ADMIN_DELETE_NUTRIDATA,
  ADMIN_ERROR,
  ADMIN_GETUSERS,
  ADMIN_LOADING,
  ADMIN_NUTRIDATA,
  ADMIN_NUTRIDATA_ERROR,
  ADMIN_NUTRIDATA_LOADING,
  ADMIN_SINGLE_USER_NUTRIDATA,
  ADMIN_UPDATE_NUTRIDATA,
  ADMIN_UPDATE_NUTRIDATA_ERROR,
  ADMIN_UPDATE_NUTRIDATA_LOADING,
} from "./admin.actionTypes";
import {
  addnutriData,
  deleteNutriData,
  deleteUser,
  getnutriData,
  getUsers,
  singleUserNutridata,
  updateNutriData,
} from "./admin.api";

// Get Admin-Users
export const getAdminUsers = () => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    let res = await getUsers();
    dispatch({ type: ADMIN_GETUSERS, payload: res });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR });
  }
};

// Delete Admin-users
export const deleteAdminUser = (userId) => async (dispatch) => {
  dispatch({ type: ADMIN_DELETE_LOADING });
  try {
    let res = await deleteUser(userId);

    dispatch({ type: ADMIN_DELETEUSRS, payload: userId });
  } catch (error) {
    dispatch({ type: ADMIN_DELETE_ERROR });
  }
};

// Get Admin-NutriData
export const getAdminNutriData = () => async (dispatch) => {
  dispatch({ type: ADMIN_NUTRIDATA_LOADING });
  try {
    let res = await getnutriData();
    dispatch({ type: ADMIN_NUTRIDATA, payload: res.data });
  } catch (error) {
    dispatch({ type: ADMIN_NUTRIDATA_ERROR });
  }
};

// Delete Admin-NutriData
export const deleteAdminNutriData = (nutriId) => async (dispatch) => {
  dispatch({ type: ADMIN_DELETE_LOADING });
  try {
    let res = await deleteNutriData(nutriId);
    dispatch({ type: ADMIN_DELETE_NUTRIDATA, payload: nutriId });
  } catch (error) {
    dispatch({ type: ADMIN_DELETE_ERROR });
  }
};

// Add Admin-NutriData
export const addAdminNutriData = (data) => async (dispatch) => {
  dispatch({ type: ADMIN_ADD_NUTRIDATA_LOADING });
  try {
    let res = await addnutriData(data);
    dispatch({ type: ADMIN_ADD_NUTRIDATA_ERROR, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_ADD_NUTRIDATA_ERROR });
  }
};

// Update Admin-NutriData
export const updateAdminNutriData = (nutriId, data) => async (dispatch) => {
  dispatch({ type: ADMIN_UPDATE_NUTRIDATA_LOADING });
  try {
    let res = await updateNutriData(nutriId, data);

    dispatch({ type: ADMIN_UPDATE_NUTRIDATA, payload: res.data });
  } catch (error) {
    dispatch({ type: ADMIN_UPDATE_NUTRIDATA_ERROR });
  }
};

export const AdminSingleUserNutriData = (userId) => async (dispatch) => {
  console.log(userId);
  dispatch({ type: ADMIN_LOADING });
  try {
    let res = await singleUserNutridata(userId);
    dispatch({ type: ADMIN_SINGLE_USER_NUTRIDATA, payload: res });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR });
  }
};

export const AdminLogut = () => (dispatch) => {
  dispatch({ type: ADMIN_AUTH_LOGOUT, payload: false });
};
