import "./AddText.scss";
import React from "react";

const AddText = ({addDataPost}) => {
    
    const textContent = React.createRef()

    const addPost = () => {
        const myText = textContent.current.value;
        addDataPost(myText)
    }

    return (
        <>
        <textarea ref={textContent}></textarea>
        <button onClick={addPost}>Add Post</button>
        </>
    )
}

export default AddText;
