import { connect } from "react-redux/es/exports";
import { compose } from "redux";
import React from "react";
import ProfileForm from "./ProfileForm";
import {addPostCreateThunk} from "./../../redux/reducerProfile.jsx";

class AddTextContiner extends React.Component {

    render(){
        return (
            <ProfileForm {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps, {addPostCreateThunk})
)(AddTextContiner)
