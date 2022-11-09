import { usersAPI } from "./../api/api.jsx";

const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

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

    dataTextArea: "Write something!"
  }

const reducerProfile = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            const dataPostUser = {
                id: state.dataPost.length, 
                text: state.dataTextArea, 
                like: Math.floor(Math.random() * 10)
              }
          return {
                  ...state,  
                  dataPost: [...state.dataPost, dataPostUser],
                  dataTextArea: "",
                }
        case CHANGE_TEXT:
          return {
                  ...state,  
                  dataTextArea: action.writeText
                 }
        case SET_USERS_PROFILE:
          return {
                  ...state,
                  userProfile: action.userProfile,
                 }
        default: return state;
    }
}

export default reducerProfile;

export const addPostActionCreator = () => ({type: ADD_POST});
export const changeTextActionCreator = (text) => ({type: CHANGE_TEXT, writeText: text});
export const setUserProfile = (userProfile) => ({type: SET_USERS_PROFILE, userProfile: userProfile});

export const getUserProfileCreaterTunk = (userId) => {
    return (
      (dispatch) => {
        usersAPI.getUserProfile(userId).then(data => {
          dispatch(setUserProfile(data))
        });
      }
    )
}