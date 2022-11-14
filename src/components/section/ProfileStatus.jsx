import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    editElement = () => {
        this.setState({
            editMode: true,
        })
    }

    unEditEllement = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatusProfileCreateThunk(this.state.status);
    }

    onStatusChande = (event) => {
        this.setState({
            status: event.currentTarget.value,
        })
    }

        render(){

            return (
                
                !this.state.editMode 
                ? <div onDoubleClick={this.editElement}>{this.props.status}</div> 
                : <div><input onChange={this.onStatusChande} autoFocus onBlur={this.unEditEllement} value={this.state.status} /></div> 
            )
                

    }
}

export default ProfileStatus;




