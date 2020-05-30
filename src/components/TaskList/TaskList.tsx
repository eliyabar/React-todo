import React, {useContext, FunctionComponent } from 'react';
import {TaskListContext} from '../../context/TaskListContext'
import List from '@material-ui/core/List';
import Task from './Task';
import {Typography} from '@material-ui/core';



export const TaskList: FunctionComponent = (props) => {
  const {tasks} = useContext(TaskListContext)

  const [checked, setChecked] = React.useState<string[]>([]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
      <List>
        {tasks?.length ? tasks.map((tsk: any) => {
          return (<Task task={tsk} key={tsk.id} handleToggle={handleToggle} checked={checked}/>)})
            :
            <Typography variant={'h1'} color={'textSecondary'}>No Tasks</Typography>
        }
      </List>);
};

