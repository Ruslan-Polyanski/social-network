import React from "react";
import { useState, useEffect } from "react";

const ProfileStatus = React.memo((props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const editElement = () => {
        setEditMode(true)
    }

    const unEditEllement = () => {
        setEditMode(false)
        props.updateStatusProfileCreateThunk(status);
    }

    const onStatusChande = (event) => {
        setStatus(event.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    return (
        <>
        {console.log("render")}
        {
             ! editMode 
             ? <div onDoubleClick={editElement}>{status}</div> 
             : <div><input onChange={onStatusChande} autoFocus onBlur={unEditEllement} value={status} /></div> 
        }
        </>
    )
});

export default ProfileStatus;




