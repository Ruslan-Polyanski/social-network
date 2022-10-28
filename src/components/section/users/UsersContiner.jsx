import Users from "./UsersClass.jsx";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/reducerUsers";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
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
        }
    }
}

const UsersContiner = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContiner;