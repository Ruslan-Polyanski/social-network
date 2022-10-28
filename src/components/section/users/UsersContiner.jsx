import Users from "./UsersClass.jsx";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setPageAC, setTotalCountAC} from "../../redux/reducerUsers";

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

const UsersContiner = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContiner;