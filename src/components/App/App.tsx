import React from 'react';
import './App.css';
import {TaskList} from '../TaskList/TaskList';
import TaskListContextProvider from '../../context/TaskListContext';
import TaskForm from '../TaskForm/TaskForm';
import {Box} from '@material-ui/core';
import TaskHeader from '../TaskHeader/TaskHeader';

function App() {
    return (
        <TaskListContextProvider>
            <div className={'container'}>
                <div className={'app-wrapper'}>
                    <Box display={'flex'} flexDirection={'column'} height={'100%'} >
                        <TaskHeader/>
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'100%'}>
                            <TaskList/>
                            <TaskForm/>
                        </Box>
                    </Box>
                </div>
            </div>
        </TaskListContextProvider>
    );
}

export default App;
