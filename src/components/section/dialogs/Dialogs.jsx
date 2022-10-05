import style from "./Dialogs.module.css";
import DialogItem from "./dilagItem/DialogItem";
import DialogText from "./dialogText/DialogText";



const Dialogs = ({dataDialogs, dataText}) => {

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
           </div>
        </div>
    )
}

export default Dialogs;