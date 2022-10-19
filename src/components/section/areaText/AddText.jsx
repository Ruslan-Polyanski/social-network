import "./AddText.scss";
import React from "react";

const AddText = ({onAddText, onShowText, dataTextArea}) => {
    
    const showText = (event) => {
        const myText = event.target.value;
        onShowText(myText)
    }

    const addText = () => {
        onAddText()
    }

        return (
            <div>
                <textarea onChange={showText} value={dataTextArea} />
                <button onClick={addText}>Add Post</button>
            </div>
        )
    }

export default AddText;
