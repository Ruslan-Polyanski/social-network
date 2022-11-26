import { Formik, Form, Field } from "formik";
import React from "react";
import style from "./FormLogin.module.css";
import * as yup from "yup";

const FormLogin = ({getAuthCreaterThunk, dataMessages}) => {

    const submitForm = (values, {setSubmitting}) => {
        getAuthCreaterThunk(values.email, values.password, values.rememberMe)
        setSubmitting(false)
    }

    const submitValidationShema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
    });

    return (
        <div>
            <Formik initialValues={{ email: '', password: '' , rememberMe: false}} validationSchema={submitValidationShema} onSubmit={submitForm}>
                {({errors, isSubmitting}) => (                    
                    <Form>
                        <Field type="text" name="email" placeholder="email" className={errors.email ? style.error : null} /><br/>
                        {errors.email ? <div className={style.messages}>{errors.email}</div> : null}<br/>
                        <Field type="text" name="password" placeholder="password" className={errors.password ? style.error : null} /><br/>
                        {errors.password ? <div className={style.messages}>{errors.email}</div> : null}<br/>
                        {dataMessages ? <div className={style.messages}>{dataMessages}</div> : null}<br/>
                        <Field type="checkBox" name="rememberMe" /> remember me<br/>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormLogin;