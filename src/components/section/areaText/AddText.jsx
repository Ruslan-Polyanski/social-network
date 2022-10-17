import "./AddText.scss";
import React from "react";
import {changeTextActionCreator, addPostActionCreator} from "./../../redux/reducerProfile.jsx";

const AddText = ({dispatch, dataTextArea}) => {
    
    const showText = (event) => {
        const myText = event.target.value;
        const action = changeTextActionCreator(myText)
        dispatch(action)
    }

    const addText = () => {
        const action = addPostActionCreator();
        dispatch(action)
    }

        return (
            <div>
                <textarea onChange={showText} value={dataTextArea} />
                <button onClick={addText}>Add Post</button>
            </div>
        )
    }

export default AddText;
