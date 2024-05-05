/* eslint-disable no-unused-vars */
import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/products-storage/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {


        const userDetails = localStorage.getItem('user')
    
        if (userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        
        return config;

    },
    (e) => {
        return Promise.reject(e)
    }
)

export const login = async (data) => {
    try{
        return await apiClient.post('auth/login', data)
    }catch(e){
        return{
            error: true,
            e 
        }
    }
}

export const register = async (data) => {
    try{
        return await apiClient.post('/auth/register', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const listTasks = async () => {
    try{
        return await apiClient.get('/tasks/')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}