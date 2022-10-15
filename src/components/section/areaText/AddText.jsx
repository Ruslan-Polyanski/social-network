import "./AddText.scss";
import React from "react";

const AddText = ({addDataPost, dataTextArea, changeTextState}) => {
    
    const textContent = React.createRef()
    
    const showText = () => {
        const myText = textContent.current.value;
        changeTextState(myText)
    }

        return (
            <div>
                <textarea onChange={showText} ref={textContent} value={dataTextArea} />
                <button onClick={addDataPost}>Add Post</button>
            </div>
        )
    }

export default AddText;
