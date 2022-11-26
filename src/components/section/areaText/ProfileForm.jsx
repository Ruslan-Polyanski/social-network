import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import React from "react";
import style from "./AddText.module.css";

const ProfileForm = (props) => {

    const addPostSchemaValidation = yup.object().shape({
        dataTextArea: yup.string().min(2, "Too short!").max(30, 'Too Long!').required('Required'),
    });

    const submitForm = (values, {setSubmitting}) => {
        setTimeout(() => {
            props.addPostCreateThunk(values.dataTextArea);
            setSubmitting(false);
          }, 400);
    }

    return (
        <div>
            <Formik initialValues={{ dataTextArea: ''}} validationSchema={addPostSchemaValidation} onSubmit={submitForm}>
                {({errors, isSubmitting}) => (                    
                    <Form>
                        <Field as="textarea" type="text" name="dataTextArea" placeholder="Write something!" className={errors.dataTextArea ? style.error : null} /><br/>
                        {errors.dataTextArea ? <span className={style.messages}>{errors.dataTextArea}</span> : null}<br />
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProfileForm;