import Section from "./Section.jsx";
import React from "react";
import  { connect }  from "react-redux/es/exports";
import { setUserProfile, getUserProfileCreaterTunk } from "./../redux/reducerProfile.jsx";
import { WithAuthRedirect } from "./../HOC/WithAuthRedirect";
import { compose } from "redux";
import {WithGetParam} from './../HOC/WithGetParam';

class SectionContainer extends React.Component {
    
    componentDidMount(){
        let userId = this.props.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfileCreaterTunk(this.props.userId)
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
    }
}

export default compose(
    WithGetParam,
    connect(mapStateToProps, {setUserProfile, getUserProfileCreaterTunk}),
    WithAuthRedirect
)(SectionContainer)
