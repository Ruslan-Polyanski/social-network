import style from "./DialogText.module.css";
import React from "react";

const DialogText = ({text}) => {
    return (
        <div className={style.text}>{text}</div>
    )
}

export default DialogText;