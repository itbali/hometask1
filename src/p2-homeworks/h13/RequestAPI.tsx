import axios from 'axios'

export const requestApi = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})
