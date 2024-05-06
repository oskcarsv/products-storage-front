/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Navigate } from "react-router-dom/dist";
import {listTask as listTaskRequest, listTaskByUser} from '../../services';
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

        const listTaskByUserData = await listTaskByUser();

        if(listTaskByUserData.error){

            return toast.error(
                listTaskByUserData.e?.response?.data || 'An error occurred while reading the tasks'
            )

        }

        setTask({
            task: listTaskData.data.task,
            taskByUser: listTask.data.task.filter(task =>

                listTaskByUserData.data.taskByUser.includes(task.id)

            )
        })
    } 
    return {
        listTask, 
        isFetching: !Boolean(task), 
        allTask: task?.task,
        taskByUser: task?.taskByUser
    }
}
