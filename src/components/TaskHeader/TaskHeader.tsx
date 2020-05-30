import React, { FunctionComponent } from 'react';
import {Box, Typography} from '@material-ui/core';

interface OwnProps {}

type Props = OwnProps;

const TaskHeader: FunctionComponent<Props> = (props) => {

  return (<Box display={'flex'} justifyContent={'center'}>
      <Typography variant="h4">Tasks Manager</Typography>
  </Box>);
};

export default TaskHeader;
