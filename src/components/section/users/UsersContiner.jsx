import { connect } from "react-redux";
import { getUsers, setFollow, setUnfollow} from "../../redux/reducerUsers";
import React from "react";
import Users from "./Users.jsx";
import Preloader from "./../../preloader/Preloader.jsx";
import { WithAuthRedirect } from "../../HOC/WithAuthRedirect";

class UsersContiner extends React.Component {

    componentDidMount(){
        this.props.getUsers(this.props.activePage, this.props.pageSizeUsers)
    }

    
    onPageChange = (number) => {
        this.props.getUsers(number, this.props.pageSizeUsers)
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
                   isDisabled={this.props.isDisabled}
                   setFollow={this.props.setFollow}
                   setUnfollow={this.props.setUnfollow}
                />
            </>
        );
    }

}

// const withRedirect = WithAuthRedirect(UsersContiner);

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSizeUsers: state.usersPage.pageSizeUsers,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage,
        isPreloader: state.usersPage.isPreloader,
        isDisabled: state.usersPage.isDisabled,
    }
}

export default WithAuthRedirect(connect(mapStateToProps, {getUsers, setFollow, setUnfollow})(UsersContiner));