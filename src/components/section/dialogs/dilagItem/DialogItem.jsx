import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

const DialogItem = ({id, name}) => {
    return (
        <div className={style.link__name}><NavLink to={`/dialogs/${id}`}>{name}</NavLink></div>
    )
}

export default DialogItem;