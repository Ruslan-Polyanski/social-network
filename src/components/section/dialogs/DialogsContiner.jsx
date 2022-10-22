import React from "react";
import StoreContext from "../../../StoreContext.jsx";
import { addContentActionCreator, changeContentActionCreator } from "./../../redux/reducerMessages.jsx";
import Dialogs from "./Dialogs";


const DialogsContiner = ({dispatch, dataContentTextArea, dataDialogs, dataText}) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const dispatch = store.dispatch.bind(store);
                    const dataContentTextArea = store.getState().messages.dataContentTextArea;
                    const dataDialogs = store.getState().messages.dataDialogs;
                    const dataText = store.getState().messages.dataText;

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
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContiner;