import { ConnectedElement } from '../../../libs/shared.js';
import { html } from '../../../libs/lit-html.js';
import { store } from '../store/store.js';
import { removeTodo } from '../actions/actions.js';

class TodoList extends ConnectedElement {

    view() {

        const { todos } = this.getStore().getState();

        const header = todos.length > 0
            ? html`<span>Todo List</span>`
            : html`<span>Your list is empty</span>`

        return html`
        
            <style>
                @import '../../../style.css';
                
                div {
                    margin-top: 16px;
                }
                div > div {
                    display: inline-block;
                }
            </style>
        
            <div>
       
                ${ header }
                
                <ul>
                ${ todos.map((todo, index) => html`
                    <li>
                    
                        <div>
                            <span>${ todo }</span>
                            <small><a href="#" @click="${ _ => removeTodo(index) }">Done</a></small>
                        </div>
                    
                    </li>`)
                }
                </ul>
                
            </div>
        `
    }

    getStore() {
        return store;
    }
}

customElements.define('app-2-todo-list', TodoList);