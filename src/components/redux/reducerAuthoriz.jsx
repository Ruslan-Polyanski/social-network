import { authAPI } from "./../api/api.jsx";

const SET_AUTHORIZE_DATA = "SET_AUTHORIZE_DATA";

const initialState = {
    id: null,
    login: null,
    email: null,
    authorized: false,
}


const reducerAuthoriz = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTHORIZE_DATA:
            return {
                ...state,
                ...action.data,
                authorized: true,
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

export const getRegistrationDataCreaterThunk = () => {
    return (
        (dispatch) => {
            authAPI.getRegistrationData()
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
                       }
                    })
                    
                } else {
                    console.log(data.messages)
                }
             })
        }
    )
}