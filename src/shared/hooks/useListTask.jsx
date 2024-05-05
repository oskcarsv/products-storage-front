import { useState } from "react";
import { Navigate } from "react-router-dom/dist";
import {listTask as listTaskRequest } from './services';
import toast from "react-hot-toast";

export const useListTask = () => {
    const [task, setTask] = useState(null)

    const listTask = async (isLogged = false) => {

        const listTaskData = await listTaskRequest()
        
        if (listTaskData.error){
            return toast.error(listTaskData.e?.response?.data || 'An error occurred while reading the tasks')
        }

        if (!isLogged){
            return setTask({
                task: listTaskData.data.task
            })
        }

        setTask({
            task: listTaskData.data.task
        })
    } 
    return {listTask, isFetching: !Boolean(task), allTask: task?.task}
}
