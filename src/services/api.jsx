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

export const listTask = async () => {
    try{
        return await apiClient.get('/task/')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const listTaskByUser = async () => {
    try{
        return await apiClient.get('/task/listTaskByUser')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const createTask = async () => {
    try{
        return await apiClient.post('/task/')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const deleteTask = async () => {
    try{
        return await apiClient.delete('/task/')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}