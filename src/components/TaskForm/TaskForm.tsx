import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {Box, Button, createMuiTheme, MuiThemeProvider, TextField} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import {TaskListContext} from '../../context/TaskListContext';

const buttonsStyle = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                margin: "5px",
            }
        }
    }
});

interface TaskFormProps {
}
type Props = TaskFormProps;



const TaskForm: FunctionComponent<Props> = (props) => {
    const {addTask, editTask, editItem, setEditItem} = useContext(TaskListContext);
    const [currentTask, setCurrentTask] = useState('');

    useEffect(()=>{

    }, [setCurrentTask])

    useEffect(()=>{
        if(editItem !== undefined) {
            setCurrentTask(editItem.taskName);
        }
    }, [editItem])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if(addTask){
            addTask(currentTask)
            handleClear();
        }
        e.preventDefault()

    }
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setCurrentTask(e.target.value);
    }

    const handleClear = () => {
        setCurrentTask('')
        if(editItem && setEditItem) {
            setEditItem(undefined);
        }
    }

    const handleSave = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) =>  {
        if(editTask && editItem){
            editTask(editItem.id, currentTask);
            handleClear();
        }
    }

    return (
        <form onSubmit={handleSubmit} className={'form'} style={{display: 'flex', flexDirection:'column'}}>
            <TextField onChange={handleChange} type={'text'} placeholder={'Add Task...'} value={currentTask} required style={{padding: '10px'}}/>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                <MuiThemeProvider theme={buttonsStyle}>
                    {editItem === undefined ?
                        <Button
                        variant="contained"
                        type={'submit'}
                        color="primary"
                        endIcon={<AddIcon/>}
                    >
                        Add
                    </Button> : <Button
                            variant="contained"
                            onClick={handleSave}
                            color="primary"
                            endIcon={<SaveIcon/>}
                        >
                            Save
                        </Button>}
                    <Button
                        onClick={handleClear}
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon/>}
                    >
                        Clear
                    </Button>
                </MuiThemeProvider>
            </Box>

        </form>
    );
};

export default TaskForm;
