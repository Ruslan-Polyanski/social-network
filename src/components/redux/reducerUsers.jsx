const FOLLOW = "FOLLOWD";
const UNFOLLOW = "UNFOLLOWD";
const SET_USERS = "SET_USERS";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const initialState = {
    users: [],
    pageSizeUsers: 100,
    totalUsersCount: 0,
    activePage: 1,
}

const reduserUsers = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user;
                }),
            }
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.activePage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        default: return state;
    }
}

export default reduserUsers;

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const setPageAC = (activePage) => ({type: SET_ACTIVE_PAGE, activePage: activePage});
export const setTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount});
