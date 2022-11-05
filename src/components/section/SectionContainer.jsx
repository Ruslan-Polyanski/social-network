import Section from "./Section.jsx";
import React from "react";
import  { connect }  from "react-redux/es/exports";
import { setUserProfile } from "./../redux/reducerProfile.jsx";
import { useParams } from "react-router-dom";
import {usersAPI} from "./../api/api.jsx";

class SectionContainer extends React.Component {
    
    componentDidMount(){
        let userId = this.props.userId;
        if(!userId){
            userId = 2;
        }
        usersAPI.getUserProfile(this.props.userId).then(data => {
                this.props.setUserProfile(data)
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