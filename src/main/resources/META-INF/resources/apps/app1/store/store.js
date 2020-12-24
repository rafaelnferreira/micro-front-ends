import { createStore } from '../../../libs/redux.js';

export const INPUT_NAME = 'INPUT_NAME';
export const ENTER_EDIT_MODE = 'ENTER_EDIT_MODE';
export const LEAVE_EDIT_MODE = 'LEAVE_EDIT_MODE';

const NAME_KEY = 'app-1-name';

const previousName = localStorage.getItem(NAME_KEY);

const initialState = { name : previousName, edit: !previousName || previousName.length < 3 };

const reducer = (state, action) => {
    switch (action.type) {
        case INPUT_NAME: {
            localStorage.setItem(NAME_KEY, action.name);
            return {...state, name: action.name};
        }
        case ENTER_EDIT_MODE: {
            localStorage.removeItem(NAME_KEY);
            return {...state, edit : true, name: null};
        }
        case LEAVE_EDIT_MODE: {
            return {...state, edit : false};
        }
        default: {
            return state;
        }
    }
}

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());