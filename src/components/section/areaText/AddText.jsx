import "./AddText.scss";
import React from "react";

const AddText = ({addDataPost, dataTextArea, changeTextState}) => {
    
    const textContent = React.createRef()
    
    const addPost = () => {
        const myText = textContent.current.value;
        console.log(myText)
        addDataPost(myText)
    }
    
    const showText = () => {
        const myText = textContent.current.value;
        changeTextState(myText)
        console.log(myText)
    }

    

        return (
            <div>
                <textarea onChange={showText} ref={textContent} value={dataTextArea} />
                <button onClick={addPost}>Add Post</button>
            </div>
        )
    }

export default AddText;
