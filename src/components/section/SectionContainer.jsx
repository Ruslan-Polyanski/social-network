import Section from "./Section.jsx";
import React from "react";
import  { connect }  from "react-redux/es/exports";
import { setUserProfile, getUserProfileCreaterTunk } from "./../redux/reducerProfile.jsx";
import { useParams } from "react-router-dom";

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

export default connect(mapStateToProps, {setUserProfile, getUserProfileCreaterTunk})(GetParams);