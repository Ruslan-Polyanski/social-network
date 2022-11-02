import React from "react";
import Header from "./Header.jsx";
import { setAuthorizeData } from "../redux/reducerAuthoriz";
import  { connect }  from "react-redux/es/exports";
import axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true })
             .then(response => {
                if(response.data.resultCode === 0){
                    const {id, email, login} = response.data.data;
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