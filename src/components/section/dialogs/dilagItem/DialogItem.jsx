import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";
import React from "react";

const DialogItem = ({id, name}) => {
    return (
        <div className={style.link__name}>
            <div className={style.gap}>
                <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="img name" className={style.img} />
            </div>
            <NavLink to={`/dialogs/${id}`} className={style.link}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;