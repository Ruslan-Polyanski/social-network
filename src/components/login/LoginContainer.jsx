import React from "react";
import { compose } from "redux"
import  { connect }  from "react-redux/es/exports";
import { getAuthCreaterThunk } from "./../redux/reducerAuthoriz";
import Login from "./Login.jsx";

class LoginContainer extends React.Component {

    render(){
        return (
            <>
                <Login {...this.props} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.authoriz.id,
    }
}

export default compose(
    connect(mapStateToProps, { getAuthCreaterThunk })
)(LoginContainer)