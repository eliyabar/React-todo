import React, {createContext, useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid'

export interface ITask {
    id: string,
    taskName: string,
}

type ContextProps = {
    tasks: ITask[],
    addTask: (taskName: string) => void,
    removeTask: (id: string) => void,
    editTask: (id: string, newTaskName: string) => void,
    findItem: (id: string) => void,
    editItem: ITask,
    setEditItem: (task: ITask | undefined) => void
};

export const TaskListContext = createContext<Partial<ContextProps>>({})

const getInitialState = () => {
    return localStorage.getItem('tasks')?.length ? JSON.parse(localStorage.getItem('tasks') as string) : {taskName: 'Example Task', id: '1'};
}

const TaskListContextProvider = (props: { children: React.ReactNode; }) => {
    const [tasks, setTasks] = useState<ITask[]>(getInitialState());

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const [editItem, setEditItem] = useState<ITask | undefined>(undefined)

    const addTask = (taskName: string) => {
        setTasks([...tasks, {id: uuid(), taskName}])
    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const editTask = (id: string, taskName: string) => {
        const newTasks = tasks.map(task => (task.id === id ? {id, taskName} : task));
        setTasks(newTasks);
    }

    const findItem = (id: string) => {
        const task = tasks.find(task => task.id === id);
        if (task) {
            setEditItem(task);
        }
    }

    return <TaskListContext.Provider
        value={{tasks, addTask, removeTask, findItem: findItem, editTask, editItem, setEditItem}}>
        {props.children}
    </TaskListContext.Provider>
}

export default TaskListContextProvider