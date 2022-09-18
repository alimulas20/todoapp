import React from 'react';

import { Input } from './Input'
import { TodoList } from './todoList'
import { Container } from '@mui/material'


export const TodoApp = ({ state, dispatch }) => {
    return (
        
        <Container fixed >
            <Input dispatch={dispatch} />
            <TodoList state={state} dispatch={dispatch} />
        </Container>
    );
}
