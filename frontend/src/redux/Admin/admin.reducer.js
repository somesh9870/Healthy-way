import * as types from "./admin.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
  isAuth: false,
  nutriData: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADMIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case types.ADMIN_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case types.ADMIN_GETUSERS:
      return {
        ...state,
        users:payload
      };

    default:
      return state;
  }
};
