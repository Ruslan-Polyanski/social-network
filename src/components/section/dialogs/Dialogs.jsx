import style from "./Dialogs.module.css";
import DialogItem from "./dilagItem/DialogItem";
import DialogText from "./dialogText/DialogText";



const Dialogs = (props) => {
    
    const dataDialogs = [
        {id: 0, name: "Dima"},
        {id: 1, name: "Helen"},
        {id: 2, name: "Rik"},
        {id: 3, name: "Sarah"},
        {id: 4, name: "Jake"},
        {id: 5, name: "Tom"},
    ];

    const dataText = [
        {id: 0, text: "How old are you?"},
        {id: 1, text: "You are yong men?"},
        {id: 2, text: "What is your name?"},
        {id: 3, text: "Hello my friend!"},
        {id: 4, text: "I think you don`t like this food."},
        {id: 5, text: "Hello everyone!"},
    ];

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