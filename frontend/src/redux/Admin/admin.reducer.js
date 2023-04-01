import * as types from "./admin.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
  isAuth: localStorage.getItem("adminName") ? true : false,
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

    case types.ADMIN_AUTH:
      return {
        ...state,
      };
    case types.ADMIN_AUTH_LOGOUT:
      return {
        ...state,
        isAuth: false,
      };

    case types.ADMIN_GETUSERS:
      return {
        ...state,
        users: payload,
      };

    case types.ADMIN_DELETE_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case types.ADMIN_DELETE_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case types.ADMIN_DELETEUSRS:
      return {
        ...state,
        users: state.users.filter((item) => item._id !== payload),
      };

    case types.ADMIN_NUTRIDATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case types.ADMIN_NUTRIDATA_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case types.ADMIN_NUTRIDATA:
      return {
        ...state,
        nutriData: payload,
      };

    case types.ADMIN_DELETE_NUTRIDATA:
      return {
        ...state,
        nutriData: state.nutriData.filter((item) => item._id !== payload),
      };

    case types.ADMIN_ADD_NUTRIDATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case types.ADMIN_ADD_NUTRIDATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.ADMIN_ADD_NUTRIDATA:
      return {
        ...state,
        nutriData: [payload, ...state.nutriData],
      };

    case types.ADMIN_UPDATE_NUTRIDATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case types.ADMIN_UPDATE_NUTRIDATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.ADMIN_UPDATE_NUTRIDATA:
      return {
        ...state,
        isLoading: false,
        nutriData: state.nutriData.map((item) =>
          item._id === payload._id ? payload : item
        ),
      };
    case types.ADMIN_SINGLE_USER_NUTRIDATA:
      return {
        ...state,
        nutriData: payload,
      };

    default:
      return state;
  }
};
