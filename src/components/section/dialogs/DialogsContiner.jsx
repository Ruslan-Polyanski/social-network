// import React from "react";
// import StoreContext from "../../../StoreContext.jsx";
import { addContentActionCreator, changeContentActionCreator } from "./../../redux/reducerMessages.jsx";
import Dialogs from "./Dialogs";
import { connect } from "react-redux/es/exports";


// const DialogsContiner = ({dispatch, dataContentTextArea, dataDialogs, dataText}) => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {

//                     const dispatch = store.dispatch;
//                     const dataContentTextArea = store.getState().messages.dataContentTextArea;
//                     const dataDialogs = store.getState().messages.dataDialogs;
//                     const dataText = store.getState().messages.dataText;

//                     const onChangeContent = (text) => {
//                         const action = changeContentActionCreator(text);
//                         dispatch(action)
//                     }
                    
//                     const onAddContent = () => {
//                         const action = addContentActionCreator()
//                         dispatch(action)
//                     }

//                     return (
//                         <Dialogs onAddContent={onAddContent} onChangeContent={onChangeContent} dataContentTextArea={dataContentTextArea}  dataDialogs={dataDialogs} dataText={dataText} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        dataContentTextArea: state.messages.dataContentTextArea,
        dataDialogs: state.messages.dataDialogs,
        dataText: state.messages.dataText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeContent: (text) => {
            const action = changeContentActionCreator(text);
            dispatch(action)
        },
        onAddContent: () => {
            const action = addContentActionCreator()
            dispatch(action)
        }
    }
}

const DialogsContiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContiner;