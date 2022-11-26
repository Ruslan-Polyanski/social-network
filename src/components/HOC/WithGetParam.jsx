import { useParams } from "react-router-dom";
import React from "react";


export const WithGetParam = (Component) => {

    const GetParam = (props) => {
        const { userId } = useParams();
        return (
            <Component {...props}  userId={userId} />
        )
    }

    return GetParam;
}