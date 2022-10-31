import Section from "./Section.jsx";
import React from "react";
import axios from "axios";
import  { connect }  from "react-redux/es/exports";
import { setUserProfile } from "./../redux/reducerProfile.jsx"

class SectionContainer extends React.Component {

    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
             .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render(){
        return (
            <Section {...this.props.userProfile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profile.userProfile,
    }
}


export default connect(mapStateToProps, {setUserProfile})(SectionContainer);