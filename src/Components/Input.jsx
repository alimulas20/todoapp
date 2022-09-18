import React from 'react'
import { postNewTask } from './../Scripts/Operation' 
import { Grid, TextField } from '@mui/material';


export const Input = ({ dispatch }) => {
    const [content, setTaskcontent] = React.useState('')
    const [isValidateError, SetIsValidateError] = React.useState(false)
    const [helperText, SetErrorHelperText] = React.useState(null)
    
    const submitTask = () => {
        if (content.length < 3){
            SetIsValidateError(true)
            SetErrorHelperText('must lonher than 3 character')
        }else {
            SetIsValidateError(false)
            SetErrorHelperText(null)
            dispatch(postNewTask(content))
            setTaskcontent('')
        }
        
    }
    return (
        <Grid item xs={12}>
                <TextField onChange={(e)=>{setTaskcontent(e.target.value)}}
                    id="outlined-full-width"
                    value={content}
                    label="write new todo and press enter"
                    placeholder="what will you do?"
                    helperText={helperText}
                    fullWidth
                    margin="normal"
                    autoFocus
                    onKeyPress={(event)=>{
                        if(event.key === 'Enter'){
                            submitTask()
                        }
                    }}
                    error={isValidateError}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
    )
}