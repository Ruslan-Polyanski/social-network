import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dilagItem/DialogItem";
import DialogText from "./dialogText/DialogText";




const Dialogs = ({dataDialogs, dataText}) => {

    const content = React.createRef();
    
    const addContent = () => {
        alert(content.current.value)
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
                    <textarea ref={content}></textarea>
                    <button onClick={addContent}>Add messages</button>
                </div>
           </div>
        </div>
    )
}

export default Dialogs;