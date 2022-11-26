import { connect } from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";


const MapStateToPropsForRedirect = (state) => {
    return {
        authorized: state.authoriz.authorized,
    }
}

export const WithAuthRedirect = (Component) => {

    const AuthRedirect = (props) => {
        if(!props.authorized){
            return <Navigate to="/login" />
        }
        return <Component {...props} />
    }

    const ConnectAuthRedirect = connect(MapStateToPropsForRedirect)(AuthRedirect);

    return ConnectAuthRedirect;

}