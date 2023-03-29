import {
  ADMIN_ERROR,
  ADMIN_GETUSERS,
  ADMIN_LOADING,
} from "./admin.actionTypes";
import { getUsers } from "./admin.api";

export const getAdminUsers = () => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    let res = await getUsers();
    dispatch({ type: ADMIN_GETUSERS, payload: res });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR });
  }
};
