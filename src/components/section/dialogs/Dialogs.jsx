import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    return (
        <div><NavLink to={`/dialogs/${id}`}>{name}</NavLink></div>
    )
}

const DialogText = ({text}) => {
    return (
        <div>{text}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
           <div>
                <DialogItem id="dima" name="Dima"/>
                <DialogItem id="helen" name="Helen"/>
                <DialogItem id="rik" name="Rik"/>
                <DialogItem id="sarah" name="Sarah"/>
                <DialogItem id="jake" name="Jake"/>
                <DialogItem id="tom" name="Tom"/>
           </div>
           <div>
                <DialogText text="How old are you?"/>
                <DialogText text="You are yong men?"/>
                <DialogText text="What is your name?"/>
                <DialogText text="Hello my friend!"/>
                <DialogText text="I think you don`t like this food."/>
                <DialogText text="Hello everyone!"/>
           </div>
        </div>
    )
}

export default Dialogs;