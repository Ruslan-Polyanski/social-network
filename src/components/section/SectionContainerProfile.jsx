import Section from "./Section.jsx";
import React from "react";
import  { connect }  from "react-redux/es/exports";
import { setUserProfile, getUserProfileCreaterTunk, getStatusProfileCreateTunk, updateStatusProfileCreateThunk } from "./../redux/reducerProfile.jsx";
import { WithAuthRedirect } from "./../HOC/WithAuthRedirect";
import { compose } from "redux";

class SectionContainerProfile extends React.Component {

    componentDidMount(){
        let userId = this.props.id;
        if(!userId){
            this.props.history.push("/login")
        }
        this.props.getUserProfileCreaterTunk(userId)
        this.props.getStatusProfileCreateTunk(userId)
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
        id: state.authoriz.id,
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfileCreaterTunk, getStatusProfileCreateTunk, updateStatusProfileCreateThunk}),
    WithAuthRedirect
)(SectionContainerProfile)