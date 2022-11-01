import Section from "./Section.jsx";
import React from "react";
import axios from "axios";
import  { connect }  from "react-redux/es/exports";
import { setUserProfile } from "./../redux/reducerProfile.jsx";
import { useParams } from "react-router-dom";

class SectionContainer extends React.Component {
    
    componentDidMount(){
        let userId = this.props.userId;
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
             .then(response => {
                this.props.setUserProfile(response.data)
            });
    }
    
    render(){
        return (
            <Section {...this.props}/>
        )
    }
}

 const GetParams = (props) => {
    const { userId } = useParams();
    return (
        <SectionContainer {...props}  userId={userId} />
    )
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profile.userProfile,
    }
}

export default connect(mapStateToProps, {setUserProfile})(GetParams);