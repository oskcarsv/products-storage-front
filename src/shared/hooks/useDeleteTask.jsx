import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTask, deleteTask as deleteTaskRequest } from '../../services'
import toast from "react-hot-toast";

export const useDeleteTask = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const createTask = async (taskId) => {
        setIsLoading(true)

        const response = await deleteTaskRequest({
            taskId
        })
        setIsLoading(false)

        if (response.error) {
            console.log(response.error)
            console.log(response.e); 
            console.log(response.e?.response); 
            console.log(response.e?.response?.data); 
            return toast.error(response.e?.response?.data || 'An error occurred while creating a task, please try again')
        }

        const { userDetails } = response.data

        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/')
    }
    return {
        deleteTask,
        isLoading
    }
}