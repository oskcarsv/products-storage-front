import { toast } from 'react-hot-toast';

import { listTaskByUser as listTaskByUserRequest } from '../../services';

export const uselistTaskByUser = () => {

    const listTaskByUser = async (taskId, onSuccess) => {
        
        const responseData = await listTaskByUserRequest(taskId);

        if (responseData.error) {
            
            return toast.error(

                responseData.e?.response?.data || 'Occurio an error while you are following a task'

            )

        }

        toast.success('Task Successfuly')

        onSuccess(true)

    }

    return {
      
        listTaskByUser

    }
}