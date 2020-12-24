import { CREATE_TODO, REMOVE_TODO, store } from '../store/store.js';

export const createTodo = todo => store.dispatch({
    type : CREATE_TODO,
    todo,
});

export const removeTodo = index => store.dispatch({
    type : REMOVE_TODO,
    index,
})

