import React from 'react';
import { Todo } from './Todo'

import { Grid } from '@mui/material';
export const TodoList = (props) => {
  return (
    <>
      <Grid container>
        {props.state.map(el => <Todo 
          key={el.id}
          id={el.id}
          isCompleted={el.isCompleted}
          content={el.content}
          dispatch={props.dispatch} />
        )}
      </Grid>
    </>
  );
}