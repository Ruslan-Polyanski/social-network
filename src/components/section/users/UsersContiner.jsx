import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setPageAC, setTotalCountAC} from "../../redux/reducerUsers";
import axios from "axios";
import React from "react";
import Users from "./Users.jsx";

class UsersContiner extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSizeUsers}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        });
    }

    
    onPageChange = (numper) => {
        this.props.setPage(numper)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numper}&count=${this.props.pageSizeUsers}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render(){
        const amountPages = Math.ceil(this.props.totalUsersCount / this.props.pageSizeUsers);
        const pages = [];

        for(let i = 1; i <= amountPages; ++i){
            pages.push(i);
        }

        return (
            <Users users = {this.props.users}
                   pages={pages} 
                   onPageChange={this.onPageChange} 
                   activePage={this.props.activePage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSizeUsers: state.usersPage.pageSizeUsers,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalCountAC(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContiner);