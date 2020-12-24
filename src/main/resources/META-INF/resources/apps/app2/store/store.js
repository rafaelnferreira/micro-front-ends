import { createStore } from '../../../libs/redux.js';

export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const NAME_KEY = 'app-1-name';

const name = localStorage.getItem(NAME_KEY);

const initialState = { name, todos: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_TODO: {
            return {...state, todos: [...state.todos, action.todo]};
        }
        case REMOVE_TODO: {
            const todos = [...state.todos];
            todos.splice(action.index, 1);
            return {...state, todos };
        }
        default: {
            return state;
        }
    }
}

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());