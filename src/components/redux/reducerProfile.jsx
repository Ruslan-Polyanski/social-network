import { usersAPI, profileAPI } from "./../api/api.jsx";

const ADD_POST = "PROFILE/ADD-POST";
const SET_USERS_PROFILE = "PROFILE/SET_USERS_PROFILE";
const SET_STATUS_PROFILE = "PROFILE/SET_STATUS_PROFILE";

const initialState = {
    dataPost: [
      {id: 0, text: "text 1", like: 8},
      {id: 1, text: "text 2", like: 12},
      {id: 2, text: "text 3", like: 4},
      {id: 3, text: "text 4", like: 7},
      {id: 4, text: "text 5", like: 23},
      {id: 5, text: "text 6", like: 11},
    ],

    userProfile: null,

    status: "NO STATUS",
  }
  
const reducerProfile = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            const dataPostUser = {
                id: state.dataPost.length, 
                text: action.dataTextArea, 
                like: Math.floor(Math.random() * 10)
              }
          return {
                  ...state,  
                  dataPost: [...state.dataPost, dataPostUser],
                }
        case SET_USERS_PROFILE:
          return {
                  ...state,
                  userProfile: action.userProfile,
                 }
        case SET_STATUS_PROFILE:
          return {
                  ...state,
                  status: action.status,
                 }
        default: return state;
    }
}

export default reducerProfile;

export const addPostActionCreator = (dataTextArea) => ({type: ADD_POST, dataTextArea: dataTextArea});
export const setUserProfile = (userProfile) => ({type: SET_USERS_PROFILE, userProfile: userProfile});
export const setStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status: status});


export const getUserProfileCreaterTunk = (userId) => {
    return (
      async (dispatch) => {
        const data = await usersAPI.getUserProfile(userId);

        dispatch(setUserProfile(data))
      }
    )
}

export const getStatusProfileCreateTunk = (userId) => {
    return (
      async (dispatch) => {
        const status = await profileAPI.getStatus(userId)

        dispatch(setStatusProfile(status))
      }
    )
}

export const updateStatusProfileCreateThunk = (status) => {
    return (
        async (dispatch) => {
          const response = await profileAPI.updateStatus(status);
  
          if(!response.data.resultCode){
            dispatch(setStatusProfile(status))
          }
        }
    )
}

export const addPostCreateThunk = (dataTextArea) => {
  return (
    (dispatch) => (
      dispatch(addPostActionCreator(dataTextArea))
    )
  )
}