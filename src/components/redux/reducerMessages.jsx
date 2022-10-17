const ADD_CONTENT_DIALOG = "ADD-CONTENT";
const CHANGE_CONTENT_DIALOG = "CHANGE-CONTENT-DIALOG";

const reducerMessages = (state, action) => {
    switch (action.type){
        case ADD_CONTENT_DIALOG: 
        const newMessage = {
            id: state.dataText.length, 
            text: state.dataContentTextArea
          }
          state.dataText.push(newMessage)
          state.dataContentTextArea = "";
          return state;
        case CHANGE_CONTENT_DIALOG: 
            state.dataContentTextArea = action.writeText;
            return state;
        default: return state;
    }
}

export default reducerMessages;

export const addContentActionCreator = () => ({type: ADD_CONTENT_DIALOG});
export const changeContentActionCreator = (text) => ({type: CHANGE_CONTENT_DIALOG, writeText: text});
