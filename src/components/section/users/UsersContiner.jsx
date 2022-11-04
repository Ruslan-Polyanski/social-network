import { connect } from "react-redux";
import { follow, unfollow, setUsers, setPage, setTotalCount, setIsPreloader } from "../../redux/reducerUsers";
import axios from "axios";
import React from "react";
import Users from "./Users.jsx";
import Preloader from "./../../preloader/Preloader.jsx";

class UsersContiner extends React.Component {

    componentDidMount(){
        this.props.setIsPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSizeUsers}`, {
            withCredentials: true
        })
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
            this.props.setIsPreloader(false)
        });
    }

    
    onPageChange = (numper) => {
        this.props.setIsPreloader(true)
        this.props.setPage(numper)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numper}&count=${this.props.pageSizeUsers}`, {
            withCredentials: true
        })
        .then(response => {
            this.props.setUsers(response.data.items)
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
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setPage, setTotalCount, setIsPreloader})(UsersContiner);