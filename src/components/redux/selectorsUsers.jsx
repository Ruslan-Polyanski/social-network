import { createSelector } from "reselect";

export const getAllUsers = (state) => {
    return state.usersPage.users;
}

export const getAllUsersReselect = createSelector(getAllUsers, (users) => {
    return users.filter(item => item)
})

export const getPageSizeUsers = (state) => {
    return state.usersPage.pageSizeUsers;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getActivePage = (state) => {
    return state.usersPage.activePage;
}

export const getIsPreloader = (state) => {
    return state.usersPage.isPreloader;
}

export const getIsDisabled = (state) => {
    return state.usersPage.isDisabled;
}
