import { configTheme } from '../../pages/ToDoList/utils/ThemeToDoList';
import { ADD_TASK, CHANGE_THEME, COMPLETED_TASK, DELETE_TASK, EDIT_TASK, UPDATE_TASK } from '../types/ToDoListTypes'


const initialState = {
    theme: configTheme[0].theme,
    taskList: [
        { id: 1, taskName: 'task-1', done: true },
        { id: 2, taskName: 'task-2', done: false },
        { id: 3, taskName: 'task-3', done: true },
        { id: 4, taskName: 'task-4', done: false }
    ],
    taskEdit: null
}

export const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            const theme = configTheme.find(theme => theme.id === action.theme)
            state.theme = theme.theme;
            return { ...state }
        case ADD_TASK: {
            const { taskList } = state;
            taskList.push({ id: taskList.length+1, taskName: action.task, done: false })
            state.taskList = [...taskList];
            return { ...state }
        }
        case COMPLETED_TASK:
            {
                const { taskList } = state;
                const index = taskList.findIndex(task => task.id === action.taskId);
                if (index !== -1) {
                    taskList[index].done = true;
                    state.taskList = [...taskList];
                }
                return { ...state }
            }
        case DELETE_TASK:
            {
                const { taskList } = state;
                const index = taskList.findIndex(task => task.id === action.taskId);
                if (index !== -1) {
                    state.taskList.splice(index, 1);
                    state.taskList = [...taskList];
                }
                return { ...state };
            }
        case EDIT_TASK:
            {
                return { ...state, taskEdit: action.task }
            }
        case UPDATE_TASK:
            {
                const { taskList } = state;
                const index = taskList.findIndex(task => task.id === action.task.id);
                if (index !== -1) {
                    taskList[index].taskName = action.task.name;
                }
                state.taskList = taskList;
                return { ...state,taskEdit:null }
            }
        default:
            return { ...state }
    }
}
