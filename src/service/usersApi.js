import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
})

export const usersAPI = {
    getUsers() {
        return instance.get('/users')
    },
}
