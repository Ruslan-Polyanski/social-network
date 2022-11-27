import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "8fd92f69-a079-4a1a-83c3-bfffb4fecbb9"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const authAPI = {

    getRegistrationData(){
        return instance.get("auth/me")
             .then(response => response.data)
    },

    getLogIn(email, password, rememberMe){
        return instance.post("auth/login", {email: email, password: password, rememberMe: rememberMe})
                       .then(response => response.data)
    },

    getLogOut(){
        return instance.delete("auth/login")
                       .then(response => response.data)
    }
    
}

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
    }

}

export const profileAPI = {

    getStatus(userId){
        return instance.get("profile/status/" + userId)
                       .then(response => response.data)
    },
    
    updateStatus(status){
        return instance.put("profile/status", {status: status})
    }
}
