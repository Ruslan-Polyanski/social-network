const FOLLOW = "FOLLOWD";
const UNFOLLOW = "UNFOLLOWD";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [],
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
                users: [...state.users, ...action.users],
            }
        default: return state;
    }
}

export default reduserUsers;

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});