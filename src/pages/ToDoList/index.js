import React from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { addTaskAction, changeThemeAction, completedTaskAction, deleteTaskAction, editTaskAction, updateTaskAction } from '../../redux/actions/ToDoListActions';
import { Container } from './components/Container';
import { Dropdown } from './components/Dropdown';
import { Heading3 } from './components/Heading';
import { TextField } from './components/TextField';
import { Button } from './components/Button';
import { Table, Th, Thead, Tr } from './components/Table';
import { configTheme } from './utils/ThemeToDoList';

class ToDoList extends React.Component {

    state = {
        theme: 'default',
        inputTask: '',
        update: false
    }

    // componentWillReceiveProps = (newProps)=>{
    //     this.setState({
    //         inputTask: newProps.taskEdit.taskName
    //     })

    // }


    handleChange = (event) => {
        const { changeTheme } = this.props
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        if (name === 'theme') changeTheme(value);
    }

    render() {
        const { theme, taskList, taskEdit } = this.props
        const { deleteTask, addTask, editTask, completedTask, updateTask } = this.props
        return (
            <ThemeProvider theme={theme}>
                <Container className="w-50">
                    <div className="pt-5">
                        <Dropdown aria-label="Theme" onChange={this.handleChange} value={this.state.theme} name="theme">
                            {configTheme.map((item, index) => {
                                return <option value={item.id} key={index}>{item.name}</option>
                            })}
                        </Dropdown>
                    </div>
                    <Heading3 className="mt-2">To do list</Heading3>
                    <TextField name="inputTask" onChange={this.handleChange} label='Task name' className="w-50" value={this.state.inputTask}></TextField>
                    <Button className="mx-2" onClick={() => {
                        const { inputTask } = this.state;
                        this.setState({ inputTask: '' }, () => {
                            addTask(inputTask)
                        })
                    }}><i className="fas fa-plus"></i> Add task</Button>

                    {this.state.update ?
                        <Button onClick={() => {
                            const { inputTask } = this.state;
                            this.setState({
                                update: false,
                                inputTask: ''
                            }, () => {
                                updateTask(taskEdit.id, inputTask)
                            })
                        }}>
                            <i className="fas fa-upload"></i> Upload task
                        </Button> : ''}

                    <hr />
                    <Heading3>To do</Heading3>
                    <Table>
                        <Thead>
                            {taskList.map((item, index) => {
                                return item.done ? '' : (
                                    <Tr key={index}>
                                        <Th>{item.taskName}</Th>
                                        <Th className="text-end">
                                            <Button onClick={() => {
                                                this.setState({
                                                    update: true
                                                }, () => {
                                                    editTask(item)
                                                })
                                            }}><i className="fas fa-pen"></i> </Button>
                                            <Button onClick={() => completedTask(item.id)}><i className="fas fa-check"></i> </Button>
                                            <Button onClick={() => deleteTask(item.id)}><i className="fas fa-trash"></i> </Button>
                                        </Th>
                                    </Tr>)
                            })}
                        </Thead>
                    </Table>
                    <Heading3>Task completed</Heading3>
                    <Table>
                        <Thead>
                            {taskList.map((item, index) => {
                                return item.done ? (
                                    <Tr key={index}>
                                        <Th>{item.taskName}</Th>
                                        <Th className="text-end">
                                            <Button onClick={() => deleteTask(item.id)}><i className="fas fa-trash"></i> </Button>
                                        </Th>
                                    </Tr>) : ''
                            })}
                        </Thead>
                    </Table>

                </Container>
            </ThemeProvider >
        )

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.taskEdit !== this.props.taskEdit && this.props.taskEdit) {
            this.setState({
                inputTask: this.props.taskEdit.taskName
            })
        }
    }

}
const mapStateToProps = (state) => {
    return {
        theme: state.ToDoListReducer.theme,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: (theme) => {
            dispatch(changeThemeAction(theme));
        },
        addTask: (task) => {
            dispatch(addTaskAction(task));
        },
        editTask: (task) => {
            dispatch(editTaskAction(task));
        },
        updateTask: (id, name) => {
            console.log(`id,name`, id, name)
            dispatch(updateTaskAction(id, name));
        },
        deleteTask: (taskId) => {
            dispatch(deleteTaskAction(taskId));
        },
        completedTask: (taskId) => {
            dispatch(completedTaskAction(taskId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
