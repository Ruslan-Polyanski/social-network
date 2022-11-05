import React from "react";
import Header from "./Header.jsx";
import { setAuthorizeData } from "../redux/reducerAuthoriz";
import  { connect }  from "react-redux/es/exports";
import { usersAPI } from "../api/api.jsx";

class HeaderContainer extends React.Component {

    componentDidMount(){
        usersAPI.getRegistrationData()
             .then(data => {
                if(data.resultCode === 0){
                    const {id, email, login} = data.data;
                    this.props.setAuthorizeData(id, login, email);
                }
             })
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

export default connect(mapStateToProps, { setAuthorizeData })(HeaderContainer);