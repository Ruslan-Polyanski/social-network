import { connect } from "react-redux";
import { getUsers, setFollow, setUnfollow} from "../../redux/reducerUsers";
import React from "react";
import Users from "./Users.jsx";
import Preloader from "./../../preloader/Preloader.jsx";
import { WithAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";
import { getAllUsersReselect, getPageSizeUsers, getTotalUsersCount, getActivePage, getIsPreloader, getIsDisabled } from "./../../redux/selectorsUsers";

class UsersContiner extends React.Component {

    componentDidMount(){
        this.props.getUsers(this.props.activePage, this.props.pageSizeUsers)
    }

    
    onPageChange = (number) => {
        this.props.getUsers(number, this.props.pageSizeUsers)
    }

    render(){
        console.log("render")
        const amountPages = Math.ceil(this.props.totalUsersCount / this.props.pageSizeUsers);
        const pages = [];

        for(let i = 1; i <= amountPages; ++i){
            pages.push(i);
        }

        return (
            <>
                {this.props.isPreloader ? <Preloader/> : null}
                <Users users = {this.props.users}
                   pages={pages} 
                   onPageChange={this.onPageChange} 
                   activePage={this.props.activePage}
                   isDisabled={this.props.isDisabled}
                   setFollow={this.props.setFollow}
                   setUnfollow={this.props.setUnfollow}
                />
            </>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        users: getAllUsersReselect(state),
        pageSizeUsers: getPageSizeUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        activePage: getActivePage(state),
        isPreloader: getIsPreloader(state),
        isDisabled: getIsDisabled(state),
    }
}

export default compose(
    connect(mapStateToProps, {getUsers, setFollow, setUnfollow}),
    WithAuthRedirect
)(UsersContiner);