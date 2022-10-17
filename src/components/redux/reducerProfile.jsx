const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";


const reducerProfile = (state, action) => {
    switch (action.type){
        case ADD_POST:
            const dataPostUser = {
                id: state.dataPost.length, 
                text: state.dataTextArea, 
                like: Math.floor(Math.random() * 10)
              }
              state.dataPost.push(dataPostUser)
              state.dataTextArea = "";
              return state;
        case CHANGE_TEXT:
            state.dataTextArea = action.writeText;
            return state;
        default: return state;
    }
}

export default reducerProfile;

export const addPostActionCreator = () => ({type: ADD_POST});
export const changeTextActionCreator = (text) => ({type: CHANGE_TEXT, writeText: text});