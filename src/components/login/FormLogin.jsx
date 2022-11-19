import { Formik, Form, Field } from "formik";
// import * as yap from "yap";

const FormLogin = ({getAuthCreaterThunk}) => {

    const submitForm = (values, {setSubmitting}) => {
        getAuthCreaterThunk(values.email, values.password, values.rememberMe)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik initialValues={{ email: '', password: '' , rememberMe: false}} onSubmit={submitForm}>
                {({isSubmitting}) => (                    
                    <Form>
                        <Field type="text" name="email" placeholder="email" /><br/>
                        <Field type="teext" name="password" placeholder="password" /><br/>
                        <Field type="checkBox" name="rememberMe" /> remember me<br/>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormLogin;