import "./AddText.scss";
import React from "react";
import {changeTextActionCreator, addPostActionCreator} from "./../../../Redux.jsx";

const AddText = ({dispatch, dataTextArea}) => {
    
    const textContent = React.createRef()
    
    const showText = () => {
        const myText = textContent.current.value;
        const action = changeTextActionCreator(myText)
        dispatch(action)
    }

    const addText = () => {
        const action = addPostActionCreator();
        dispatch(action)
    }

        return (
            <div>
                <textarea onChange={showText} ref={textContent} value={dataTextArea} />
                <button onClick={addText}>Add Post</button>
            </div>
        )
    }

export default AddText;
