import {usersAPI} from "./../api/api.jsx";

const FOLLOW = "USERS/FOLLOWD";
const UNFOLLOW = "USERS/UNFOLLOWD";
const SET_USERS = "USERS/SET_USERS";
const SET_ACTIVE_PAGE = "USERS/SET_ACTIVE_PAGE";
const SET_TOTAL_USERS_COUNT = "USERS/SET_TOTAL_USERS_COUNT";
const SET_IS_PRELOADER = "USERS/SET_IS_PRELOADER";
const SET_IS_DISABLED = "USERS/SET_IS_DISABLED";

const initialState = {
    users: [],
    pageSizeUsers: 100,
    totalUsersCount: 0,
    activePage: 1,
    isPreloader: false,
    isDisabled: [],
}

const isFollowed = (users, id, actionUser, truth) => {
    return users.map((user) => {
                if(user[id] === actionUser){
                    return {...user, followed: truth}
                }
                return user;
            })
}

const reduserUsers = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW: 
            return {
                ...state,
                users: isFollowed(state.users, "id", action.userId, true),
            }
        case UNFOLLOW: 
            return {
                ...state,
                users: isFollowed(state.users, "id", action.userId, false),
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
        case SET_IS_PRELOADER:
            return {
                ...state,
                isPreloader: action.isPreloader,
            }
        case SET_IS_DISABLED:
            return {
                ...state,
                isDisabled: action.isTrue
                            ? [...state.isDisabled, action.userId]
                            : state.isDisabled.filter(userId => userId !== action.userId)
            }
        default: return state;
    }
}

export default reduserUsers;

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setPage = (activePage) => ({type: SET_ACTIVE_PAGE, activePage: activePage});
export const setTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount});
export const setIsPreloader = (isPreloader) => ({type: SET_IS_PRELOADER, isPreloader: isPreloader});
export const setIsDisabled = (isTrue, userId) => ({type: SET_IS_DISABLED, isTrue: isTrue, userId: userId});

export const getUsers = (activePage, pageSizeUsers) => {
    return (
        async (dispatch) => {
            dispatch(setIsPreloader(true))
            const data = await usersAPI.getUsersToOnePage(activePage, pageSizeUsers);
            
            dispatch(setPage(activePage))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(setIsPreloader(false))
        }
    )
}

const fullowUnfollow = async (dispatch, userId, authMethod, move) => {
        dispatch(setIsDisabled(true, userId))
        const data = await authMethod(userId)
        
        if(data.resultCode === 0){
            dispatch(move(userId))
        }
        dispatch(setIsDisabled(false, userId))
}

export const setFollow = (userId) => {
    return (
        async (dispatch) => {
            const authMethod = usersAPI.getUnfollow.bind(usersAPI);
            fullowUnfollow(dispatch, userId, authMethod, unfollow)
        }
    )
}

export const setUnfollow = (userId) => {
    return (
        async (dispatch) => {
            const authMethod = usersAPI.getFollow.bind(usersAPI);
            fullowUnfollow(dispatch, userId, authMethod, follow)
        }
    )
}
