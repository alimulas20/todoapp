import { todoServerAPI, postTask, putTask } from './Api'

export const updateState = () => {
    return async (dispatch) => {
        let serverState = await todoServerAPI.getData()
        dispatch({ type: 'SET_SERVER_STATE', serverState })
    }
}

export const postNewTask = (content) => {
    return async (dispatch) => {
        let response = await postTask(content)
        if (response.ok) {
            dispatch(updateState())
        }
    }

}

export const deleteTask = (id) => {
    return async (dispatch) => {
        let response = await todoServerAPI.deleteTask(id)
        if (response.ok) {
            dispatch({ type: 'DELETE_TASK', id: id })
        }
    }
}


export const changeTask = (content, isCompleted,id) => {
    return async (dispatch) => {
        await putTask(id,isCompleted,content )
        dispatch(updateState())
    }
}

