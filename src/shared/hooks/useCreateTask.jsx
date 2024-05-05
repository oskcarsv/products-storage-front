import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask as createTaskRequest } from '../../services'
import toast from "react-hot-toast";

export const useCreateTask = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const createTask = async (taskName, taskDescription, taskIntegrants, taskInitialDate, taskEndDate, taskStatus, taskCreator) => {
        setIsLoading(true)

        const allTaskIntegrants = userRole === 'USER_ROLE' ? undefined : taskIntegrants;

        const response = await createTaskRequest({
            taskName,
            taskDescription, 
            taskIntegrants: allTaskIntegrants, 
            taskInitialDate, 
            taskEndDate, 
            taskStatus,
            taskCreator
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
        createTask,
        isLoading
    }
}