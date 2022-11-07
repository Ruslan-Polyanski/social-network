import { connect } from "react-redux";
import { follow, unfollow, setUsers, setPage, setTotalCount, setIsPreloader, setIsDisabled } from "../../redux/reducerUsers";
import React from "react";
import Users from "./Users.jsx";
import Preloader from "./../../preloader/Preloader.jsx";
import {usersAPI} from "./../../api/api.jsx";

class UsersContiner extends React.Component {

    componentDidMount(){
        this.props.setIsPreloader(true)
        usersAPI.getUsersToOnePage(this.props.activePage, this.props.pageSizeUsers)
        .then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
            this.props.setIsPreloader(false)
        });
    }

    
    onPageChange = (number) => {
        this.props.setIsPreloader(true)
        this.props.setPage(number)
        usersAPI.getUsersToSomePage(number, this.props.pageSizeUsers)
        .then(data => {
            this.props.setUsers(data.items)
            this.props.setIsPreloader(false)
        });
    }

    render(){
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
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isDisabled={this.props.isDisabled}
                   setIsDisabled={this.props.setIsDisabled}
                />
            </>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSizeUsers: state.usersPage.pageSizeUsers,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage,
        isPreloader: state.usersPage.isPreloader,
        isDisabled: state.usersPage.isDisabled
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setPage, setTotalCount, setIsPreloader, setIsDisabled})(UsersContiner);