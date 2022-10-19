import React from "react";
import { addContentActionCreator, changeContentActionCreator } from "./../../redux/reducerMessages.jsx";
import Dialogs from "./Dialogs";


const DialogsContiner = ({dispatch, dataContentTextArea, dataDialogs, dataText}) => {

    const onChangeContent = (text) => {
        const action = changeContentActionCreator(text);
        dispatch(action)
    }
    
    const onAddContent = () => {
        const action = addContentActionCreator()
        dispatch(action)
    }

    return (
       <Dialogs onAddContent={onAddContent} onChangeContent={onChangeContent} dataContentTextArea={dataContentTextArea}  dataDialogs={dataDialogs} dataText={dataText} />
    )
}

export default DialogsContiner;