import { Formik, Form, Field } from "formik";
// import * as yap from "yap";

const FormLogin = (props) => {

    const submitForm = (values) => {
        console.log(values)
    }

    return (
        <div>
            <Formik initialValues={{ userName: '', userPassword: '' , isSave: false}} onSubmit={submitForm}>
                {({isSubmitting}) => (                    
                    <Form>
                        <Field type="text" name="userName" placeholder="name" /><br/>
                        <Field type="password" name="userPassword" placeholder="password" /><br/>
                        <Field type="checkBox" name="isSave" /> remember me<br/>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const Login = (props) => {
    return (
        <>
          <h1>Login</h1>
          <FormLogin/>
        </>
            
    )
}

export default Login;