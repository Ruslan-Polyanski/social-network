const FOLLOW = "FOLLOWD";
const UNFOLLOW = "UNFOLLOWD";
const SET_USERS = "SET_USERS";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_PRELOADER = "SET_IS_PRELOADER";
const SET_IS_DISABLED = "SET_IS_DISABLED";

const initialState = {
    users: [],
    pageSizeUsers: 100,
    totalUsersCount: 0,
    activePage: 1,
    isPreloader: false,
    isDisabled: [],
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
