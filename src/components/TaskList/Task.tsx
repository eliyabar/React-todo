import React, { FunctionComponent, useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {ITask} from '../../context/TaskListContext'
import {TaskListContext} from '../../context/TaskListContext';

interface OwnProps {
    task: ITask,
    handleToggle(value: string): () => void
    checked: string[]
}

type TaskProps = OwnProps;

const Task: FunctionComponent<TaskProps> = (props) => {
    const {removeTask, findItem} = useContext(TaskListContext)

  return (
      <ListItem key={props.task.id} role={undefined} dense button onClick={props.handleToggle(props.task.id)}>
          <ListItemIcon>
              <Checkbox
                  edge="start"
                  checked={props.checked.indexOf(props.task.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': props.task.taskName }}
              />
          </ListItemIcon>
          <ListItemText id={props.task.taskName} primary={`${props.task.taskName}`} />
          <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments" onClick={()=> findItem ? findItem(props.task.id) : undefined}>
                  <EditIcon/>
              </IconButton>
              <IconButton edge="end" aria-label="comments" onClick={() => removeTask ? removeTask(props.task.id) : undefined}>
                  <DeleteIcon/>
              </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
  );
};

export default Task;
