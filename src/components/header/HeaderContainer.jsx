import React from "react";
import Header from "./Header.jsx";
import { logOutThunkCreator } from "../redux/reducerAuthoriz";
import  { connect }  from "react-redux/es/exports";
import { compose } from "redux";
// import { WithGetParam } from "./../HOC/WithGetParam";

class HeaderContainer extends React.Component {

    
    render(){
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.authoriz.login,
        authorized: state.authoriz.authorized,
    }
}

export default compose(
    connect(mapStateToProps, { logOutThunkCreator })
)(HeaderContainer)