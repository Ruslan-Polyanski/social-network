import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
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
    }

        render(){

            return (
                
                !this.state.editMode 
                ? <div onDoubleClick={this.editElement}>{this.props.status}</div> 
                : <div><input autoFocus onBlur={this.unEditEllement} value={this.props.status} /></div> 
            )
                

    }
}

export default ProfileStatus;




