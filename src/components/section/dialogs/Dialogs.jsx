import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dilagItem/DialogItem";
import DialogText from "./dialogText/DialogText";

const Dialogs = ({onAddContent, onChangeContent, dataContentTextArea, dataDialogs, dataText}) => {

    const changeContent = (event) => {
        const text = event.target.value;
        onChangeContent(text)
    }
    
    const addContent = () => {
        onAddContent()
    }


    return (
        <div className={style.dialogs}>
           <div>
                {dataDialogs.map((item) => {
                    return  <DialogItem key={item.id} id={item.id} name={item.name}/> ;
                })}
           </div>
           <div>
                {dataText.map((item) => {
                    return <DialogText key={item.id} id={item.id} text={item.text}/>
                })}
                <div className="addMessages">
                    <textarea onChange={changeContent} value={dataContentTextArea}></textarea>
                    <button onClick={addContent}>Add messages</button>
                </div>
           </div>
        </div>
    )
}

export default Dialogs;