import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'baf52fc7-ee31-49b9-86d7-d8c068e1112a'
    }
})

export const usersApi = {
    getUsers(currentPage = 1, count = 100) {
        return instance.get(`users?page=${currentPage}&count=${count}`)
            .then(response => response.data);
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const authMeApi = () => {
    return instance.get('auth/me')
        .then(response => response.data);
}

