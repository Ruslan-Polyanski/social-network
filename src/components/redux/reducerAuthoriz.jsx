import { authAPI } from "./../api/api.jsx";

const SET_AUTHORIZE_DATA = "SET_AUTHORIZE_DATA";
const  SET_AUTHORIZE_MESSAGE = "SET_AUTHORIZE_MESSAGE";
const SET_LOG_OUT = "SET_LOG_OUT";

const initialState = {
    id: null,
    login: null,
    email: null,
    authorized: false,
    dataMessages: null,
}


const reducerAuthoriz = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTHORIZE_DATA:
            return {
                ...state,
                ...action.data,
                authorized: true,
            }
        case SET_AUTHORIZE_MESSAGE:
            return {
                ...state,
                dataMessages: action.dataMessages,
            }
        case SET_LOG_OUT:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                authorized: false,
            }
        default: return state;
    }
}

export default reducerAuthoriz;

export const setAuthorizeData = (id, login, email) => ({type: SET_AUTHORIZE_DATA, data: {
    id: id, 
    login: login, 
    email: email,
}});

export const setAuthMessages = (dataMessages) => ({type: SET_AUTHORIZE_MESSAGE, dataMessages: dataMessages});
export const setDeleteLogOut = () => ({type: SET_LOG_OUT});

export const logOutThunkCreator = () => {
    return (
        (dispatch) => {
            authAPI.getLogOut()
                   .then(data => {
                        if(data.resultCode === 0){
                            dispatch(setDeleteLogOut())
                        }
                   })
        }
    )
}

export const getRegistrationDataCreaterThunk = () => {
    return (
        (dispatch) => {
            return authAPI.getRegistrationData()
                    .then(data => {
                        if(data.resultCode === 0){
                            const {id, email, login} = data.data;
                            dispatch(setAuthorizeData(id, login, email))
                        }
                })
        }
    )
}

export const getAuthCreaterThunk = (email, password, rememberMe) => {
    return (
        (dispatch) => {
            authAPI.getLogIn(email, password, rememberMe)
             .then((data) => {
                if(data.resultCode === 0){
                    authAPI.getRegistrationData()
                    .then(data => {
                       if(data.resultCode === 0){
                           const {id, email, login} = data.data;
                           dispatch(setAuthorizeData(id, login, email))
                           dispatch(setAuthMessages(null))
                       }
                    })
                    
                } else {
                    dispatch(setAuthMessages(data.messages[0]))
                }
             })
        }
    )
}