import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { todoServerAPI } from './Scripts/Api'
import {TextField } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { TodoApp } from './Components/todoApp'
import { LinearProgress, AppBar, Toolbar, Typography,IconButton, Grid } from '@mui/material'








const App = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [isAppInitialized, setIsAppInitialized] = useState(false)
  const [name, setName] = useState("");
  const [color,setColor]=useState("primary")
  useEffect(() => {
    (async () => {
      let serverState = await todoServerAPI.getData()
      dispatch({ type: 'SET_SERVER_STATE', serverState })
      setIsAppInitialized(true)
    })()
  }, [])
  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(name));
  }, [name]);
  //console.log(name);
  return (
    <>
      <AppBar position="static" color={color} >
        <Toolbar>
          <Typography variant="h5" >
           Todo App
          </Typography>
        </Toolbar>
        
      </AppBar>
      <Toolbar>
        
          {
          JSON.parse(localStorage.getItem('names')) ?
          <Grid item xs={12} display="flex" justifyContent="space-between" width="100%">
            <Typography variant="h5">
            {JSON.parse(localStorage.getItem('names')) }
            </Typography>
            <IconButton 
                  onClick={(event) => {
                    event.stopPropagation()
                    localStorage.setItem('names',JSON.stringify(""))
                    setName("")
                  }}
                  aria-label="logout" >
                  <LogoutIcon fontSize="large" />
                 
                </IconButton>
          </Grid>
           :
           <div>
            <TextField 
           id="outlined-full-width"
           label="Write Your Name and Press Enter"
           placeholder="Please Enter Your Name"
           fullWidth
           margin="normal"
           autoFocus
           onKeyPress={(event)=>{
               if(event.key === 'Enter'){
                setName(event.target.value)
                localStorage.setItem('names', JSON.stringify(event.target.value));
               }
           }}
          color="secondary"
           InputLabelProps={{
               shrink: true,
           }}
           variant="outlined"
          />
           </div>
          }
       
        </Toolbar>

      {
        isAppInitialized
          ?<div >
            {JSON.parse(localStorage.getItem('names'))&&<TodoApp dispatch={dispatch} state={state} />}</div> 
          : <LinearProgress />
      }
    </>
  );
}

export default App;


