const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";

const initialState = {
    dataPost: [
      {id: 0, text: "text 1", like: 8},
      {id: 1, text: "text 2", like: 12},
      {id: 2, text: "text 3", like: 4},
      {id: 3, text: "text 4", like: 7},
      {id: 4, text: "text 5", like: 23},
      {id: 5, text: "text 6", like: 11},
    ],

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
        default: return state;
    }
}

export default reducerProfile;

export const addPostActionCreator = () => ({type: ADD_POST});
export const changeTextActionCreator = (text) => ({type: CHANGE_TEXT, writeText: text});