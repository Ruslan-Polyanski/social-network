import FormLogin from "./FormLogin";
import React from "react";


const Login = (props) => {
    return (
        <>
          <h1>Login</h1>
          <FormLogin {...props} />
        </>
            
    )
}

export default Login;