

const ADD_CONTENT_DIALOG = "MESSAGES/ADD-CONTENT";

const initialState = {

    dataDialogs: [
      {id: 0, name: "Dima"},
      {id: 1, name: "Helen"},
      {id: 2, name: "Rik"},
      {id: 3, name: "Sarah"},
      {id: 4, name: "Jake"},
      {id: 5, name: "Tom"},
    ],

    dataText: [
      {id: 0, text: "How old are you?"},
      {id: 1, text: "You are yong men?"},
      {id: 2, text: "What is your name?"},
      {id: 3, text: "Hello my friend!"},
      {id: 4, text: "I think you don`t like this food."},
      {id: 5, text: "Hello everyone!"},
    ],

  }

const reducerMessages = (state = initialState, action) => {
    switch (action.type){
        case ADD_CONTENT_DIALOG: 
        const newMessage = {
            id: state.dataText.length, 
            text: action.dataContentTextArea
          }
          return {
                  ...state,
                  dataText: [...state.dataText, newMessage],
                 }
        default: return state;
    }
}

export default reducerMessages;

export const addContentActionCreator = (dataContentTextArea) => ({type: ADD_CONTENT_DIALOG, dataContentTextArea: dataContentTextArea});

export const addContentCreatorThunk = (dataContentTextArea) => {
  
  return (
    (dispatch) => {
      dispatch(addContentActionCreator(dataContentTextArea))
    }
  )
}
