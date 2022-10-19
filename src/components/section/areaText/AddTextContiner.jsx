import React from "react";
import AddText from "./AddText"
import {changeTextActionCreator, addPostActionCreator} from "./../../redux/reducerProfile.jsx";

const AddTextContiner = ({dispatch, dataTextArea}) => {
    
    const onShowText = (myText) => {
        const action = changeTextActionCreator(myText)
        dispatch(action)
    }

    const onAddText = () => {
        const action = addPostActionCreator();
        dispatch(action)
    }

        return (
            <AddText onShowText={onShowText} onAddText={onAddText} dataTextArea={dataTextArea} />
        )
    }

export default AddTextContiner;