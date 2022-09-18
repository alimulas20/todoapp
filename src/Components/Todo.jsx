import React, { useState } from 'react';
import { deleteTask, changeTask } from './../Scripts/Operation'

import {makeStyles} from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import {
  Grid, TextField, 
  Checkbox, FormControlLabel, IconButton
} from '@mui/material';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  buttonPadding: {
    padding: '0px'
  }
});

export const Todo = ({ id, isCompleted, content,  dispatch }) => {
  const classes = useStyles();
  const [isEdit,setIsEdit]=useState(false);
 const [newContent, setNewContent] = useState(content)



  const setIsCompleted = () => {
    dispatch(changeTask(content,  !isCompleted,id))
  }

  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <div>
        <Grid container justify="space-between">
          {isEdit ? 
          <Grid item xs={10}>
            <TextField 
              label="Update ToDo"
              id="outlined-full-width"
              defaultValue={content}
              size="small"
              margin="normal"
              onChange={e=>setNewContent(e.target.value)}
            />
          </Grid>
            
          
        :
            <Grid item xs={10}>
            <FormControlLabel label={content} aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox checked={isCompleted}
                onChange={setIsCompleted} />}
            />
          </Grid>
          }
              
              <Grid item xs={2} display="flex" justifyContent="end">

                {isEdit &&
                  <IconButton className={classes.buttonPadding}
                    onClick={(event) => {
                    event.stopPropagation()
                    dispatch(changeTask(newContent,isCompleted,id))
                    setIsEdit(false)
                  }}
                  aria-label="save" >
                  <SaveIcon fontSize="large" />

                  </IconButton>}
              
                <IconButton className={classes.buttonPadding}
                  onClick={(event) => {
                    event.stopPropagation()
                    setIsEdit(prev=>!prev)
                  }}
                  aria-label="edit" >
                  <EditIcon fontSize="large" />
                 
                </IconButton>
                <IconButton className={classes.buttonPadding}
                  onClick={(event) => {
                    event.stopPropagation()
                    dispatch(deleteTask(id))
                  }}
                  aria-label="delete">
                  <DeleteIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
        </div>
      </div>
    </Grid>
  );
}