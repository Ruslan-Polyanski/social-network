import React from "react";
import Header from "./Header.jsx";
import { getRegistrationDataCreaterThunk, logOutThunkCreator } from "../redux/reducerAuthoriz";
import  { connect }  from "react-redux/es/exports";

class HeaderContainer extends React.Component {

    componentDidMount(){
        this.props.getRegistrationDataCreaterThunk()
    }
    
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

export default connect(mapStateToProps, { getRegistrationDataCreaterThunk, logOutThunkCreator })(HeaderContainer);