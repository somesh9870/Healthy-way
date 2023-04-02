import * as types from "./user.actionTypes";
import { addDatadiary, deleteDataDiary, getnutriData, getuserData } from "./user.api";


// Handle the loding and error state

export const handleLoading = () => {
    return {type: types.LOADING};
};
  
export const handleError = () => {
    return {type: types.ERROR};
};

// Get the nutrient data

export const getNutrientData = () => async (dispatch) => {
    dispatch(handleLoading);
    try {
      let res = await getnutriData();
      dispatch({ type: types.GET_NUTRIENT_DATA, payload: res.data });
      dispatch({ type: types.TOTAL_DATA });
    } catch (error) {
      dispatch(handleError);
    }
};

// Get user data for diary

export const getUserData = () => async(dispatch) => {
    dispatch(handleLoading);
    try {
        let res = await getuserData();
        dispatch({ type: types.GET_USER_DATA, payload: res.data });
        dispatch({ type: types.TOTAL_DATA });
    } catch (error) {
        dispatch(handleError);
    }
}

// Add data to the diary

export const addDataDiary = (data) => async(dispatch) => {
    dispatch(handleLoading);
    try {
        let res = await addDatadiary(data);
        dispatch({ type: types.ADD_DATA_DIARY, payload: res.data });
        dispatch({ type: types.TOTAL_DATA });
    } catch (error) {
        dispatch(handleError);
    }
};

// Delete data fro mthe diary

export const deleteDiaryData = (userId) => async(dispatch) => {
    dispatch(handleLoading);
    try {
        let res = await deleteDataDiary(userId);
        dispatch({ type: types.DELETE_DATA_DIARY, payload: userId });
        dispatch({ type: types.TOTAL_DATA });
    } catch (error) {
        dispatch(handleError);
    }
}