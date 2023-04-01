import * as types from "./user.actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    diary : [],
    nutriData : [],
    token : localStorage.getItem("userToken")
};

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.LOADING : {
            return {...state, isLoading: true};
        };
        case types.ERROR : {
            return {...state, isLoading: false, isError: true};
        };
        case types.GET_NUTRIENT_DATA : {
            return {...state, nutriData : payload};
        };
        case types.GET_USER_DATA : {
            return {...state, diary: payload};
        };
        case types.ADD_DATA_DIARY : {
            return {...state, diary: [payload, ...state.diary]};
        };
        case types.DELETE_DATA_DIARY : {
            return {...state, diary: state.diary.filter((ele) => ele._id !== payload)};
        };
        default : {
            return state;
        }; 
    }
}