import style from "./DialogText.module.css";

const DialogText = ({text}) => {
    return (
        <div className={style.text}>{text}</div>
    )
}

export default DialogText;