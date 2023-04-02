import * as types from "./user.actionTypes";

const initialState = {
    isLoading : false,
    isError : false,
    diary : [],
    nutriData : [],
    totalData : {
        consumed : 0,
        protein : 0,
        carbs : 0,
        fat : 0,
    },
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
        case types.TOTAL_DATA : {
            let consumed = 0;
            let protein = 0;
            let carbs = 0;
            let fat = 0;
            for (let i=0;i<state.diary.length;i++) {
                consumed+=Number(state.diary[i].energy.split("-")[0])
                protein+=Number(state.diary[i].protein.split("-")[0])
                fat+=Number(state.diary[i].fat.split("-")[0])
                carbs+=Number(state.diary[i].carbs.split("-")[0])
            }

            return { ...state, totalData : {consumed, protein, fat, carbs} }
        }
        default : {
            return state;
        }; 
    }
}