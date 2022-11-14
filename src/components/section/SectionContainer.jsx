import Section from "./Section.jsx";
import React from "react";
import  { connect }  from "react-redux/es/exports";
import { setUserProfile, getUserProfileCreaterTunk, getStatusProfileCreateTunk } from "./../redux/reducerProfile.jsx";
import { WithAuthRedirect } from "./../HOC/WithAuthRedirect";
import { compose } from "redux";
import {WithGetParam} from './../HOC/WithGetParam';

class SectionContainer extends React.Component {
    
    componentDidMount(){
        let userId = this.props.userId;
        if(!userId){
            userId = 26436;
        }
        this.props.getUserProfileCreaterTunk(this.props.userId)
        this.props.getStatusProfileCreateTunk(this.props.userId)
    }
    
    render(){
        
        return (
            <Section {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profile.userProfile,
        status: state.profile.status,
    }
}

export default compose(
    WithGetParam,
    connect(mapStateToProps, {setUserProfile, getUserProfileCreaterTunk, getStatusProfileCreateTunk}),
    WithAuthRedirect
)(SectionContainer)
