import { ENTER_EDIT_MODE, INPUT_NAME, LEAVE_EDIT_MODE, store } from '../store/store.js';


export const inputName = name => store.dispatch({
    type : INPUT_NAME,
    name : name,
});

export const enterEditName = _ => store.dispatch({
        type : ENTER_EDIT_MODE
    })

export const leaveEditName = _ => store.dispatch({
        type : LEAVE_EDIT_MODE
    })
