import './init.js';
import { ConnectedElement } from '../../libs/shared.js';
import { html } from '../../libs/lit-html.js';
import { store } from '../app1/store/store.js';
import './components/index.js';

class App2 extends ConnectedElement {

    view() {

        const { name } = this.getStore().getState();

        const targetView = !!name
            ? html`
                <h3>Hello ${name}, you can add your TODOs here.</h3>
                <app-2-todo-input> </app-2-todo-input>
                <app-2-todo-list> </app-2-todo-list>
            `
            : html`
                <h3>We need to know who you are before adding TODOs</h3>
                <span>Please check in </span> <a href="/app1">here</a>
            `;

        return html`

        <style>
            @import '../../style.css';     
        </style>

         <h2>TODO list</h2>
        
         ${ targetView }

        `;
    }

    getStore() {
        return store;
    }

}

customElements.define('app-2', App2);
