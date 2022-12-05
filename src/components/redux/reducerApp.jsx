import { getRegistrationDataCreaterThunk } from "./reducerAuthoriz";

const SET_INITIAL = "APP/SET_INITIAL";

const initialState = {
    initial: false,
}

const reducerApp = (state = initialState, action) => {
    switch (action.type){
        case SET_INITIAL:
            return {
                ...state,
                initial: true,
            }
        default: return state;
    }
}

export default reducerApp;

export const initialAC = () => ({type: SET_INITIAL});

export const initialThunkCreator = () => {
    return (
        (dispatch) => {
            const promise_1 = dispatch(getRegistrationDataCreaterThunk())
            Promise.all([promise_1]).then(() => {
                          dispatch(initialAC())
            }) 
        }
    )
}

