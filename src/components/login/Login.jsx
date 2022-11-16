import { Formik } from "formik";
// import * as yap from "yap";

const Login = (props) => {
    return (
        <>
        <h1>Login</h1>
        <div>
            <Formik
                initialValues = {{
                    name: 'No name',
                    password: 'No password',
                    remember: true,
                }}
                onSubmit={(values) => {console.log(values)}}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                        <form onSubmit={handleSubmit}>
                            <input type={"name"} name={"name"} onChange={handleChange} onBlur={handleBlur} placeholder="name" value={values.name}/><br/>
                            <input type={"password"} name={"password"} onChange={handleChange} onBlur={handleBlur} placeholder="password" value={values.password}/><br/>
                            <input type={"checkbox"} name={"remember"} /> Remember me <br/>
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                        </form>
                    )}
            </Formik>
        </div>
        </>
    )
}

export default Login;