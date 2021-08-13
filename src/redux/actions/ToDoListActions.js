import { ADD_TASK, CHANGE_THEME,COMPLETED_TASK,DELETE_TASK, EDIT_TASK, UPDATE_TASK } from "../types/ToDoListTypes"

export const changeThemeAction = (theme)=>{
    return {
        type : CHANGE_THEME,
        theme:parseInt(theme)
    }
}
export const editTaskAction = (task)=>{
    return {
        type : EDIT_TASK,
        task
    }
}

export const updateTaskAction = (id,name)=>{
    return {
        type : UPDATE_TASK,
        task:{
            id,name
        }
    }
}
export const addTaskAction = (task)=>{
    return {
        type : ADD_TASK,
        task
    }
}

export const deleteTaskAction = (taskId,completed)=>{
    return {
        type : DELETE_TASK,
        taskId,
        completed
    }
}

export const completedTaskAction = (taskId)=>{
    return {
        type : COMPLETED_TASK,
        taskId
    }
}