import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dilagItem/DialogItem";
import DialogText from "./dialogText/DialogText";
import { Formik, Form, Field } from "formik";
// import * as yap from "yap";

const Dialogs = ({addContentCreatorThunk, dataDialogs, dataText}) => {

    const submitForm = (values, {setSubmitting}) => {
        setTimeout(() => {
            addContentCreatorThunk(values.dataTextArea);
            setSubmitting(false);
          }, 400);
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
                    <Formik initialValues={{dataContentTextArea: "",}} onSubmit={submitForm}>
                        {({isSubmitting}) => (
                            <Form>
                                <Field as="textarea" type="text" name="dataContentTextArea" placeholder="Your messages?" /><br/>
                                <button type="submit" disabled={isSubmitting}>Add messages</button>
                            </Form>
                        )}
                    </Formik>
                </div>
           </div>
        </div>
    )
}

export default Dialogs;