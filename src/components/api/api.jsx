import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "8fd92f69-a079-4a1a-83c3-bfffb4fecbb9"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {

    getUsersToOnePage(activePage, pageSizeUsers){
        return instance.get(`users?page=${activePage}&count=${pageSizeUsers}`)
                       .then(response => response.data)
    },

    getUsersToSomePage(number, pageSizeUsers){
        return instance.get(`users?page=${number}&count=${pageSizeUsers}`)
                       .then(response => response.data)
    },

    getUserProfile(userId){
        return instance.get("profile/" + userId)
                       .then(response => response.data)
    },

    getUnfollow(userId){
        return instance.delete(`follow/` + userId)
                        .then( response => response.data)
    },

    getFollow(userId){
        return instance.post(`follow/${userId}`)
                       .then(response => response.data)
    },

    getRegistrationData(){
        return instance.get("auth/me")
             .then(response => response.data)
    }

}
