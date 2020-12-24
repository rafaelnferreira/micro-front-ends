import { ConnectedElement } from '../../../libs/shared.js';
import { html } from '../../../libs/lit-html.js';
import { store } from '../store/store.js';
import { createTodo } from '../actions/actions.js';

class TodoInput extends ConnectedElement {

    view() {

        const change = e => {
            this.todo = e.target.value;
            this.render();
        };

        const create = _ => createTodo(this.todo);

        const invalid = !this.todo || this.todo.length < 1;

        return html`
        
        <style>
            div {
                display: inline-block;
            }
        </style>
        
        <span>Enter a task:</span>

        <div>
            
            <input type="text" required @keyup="${ change }" />
            
            <button type="button" ?disabled=${ invalid } @click="${ create }">
                Add
            </button>
            
        </div>
        `
    }

    getStore() {
        return store;
    }
}

customElements.define('app-2-todo-input', TodoInput);