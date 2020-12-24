import './init.js';
import { ConnectedElement } from '../../libs/shared.js';
import { html } from '../../libs/lit-html.js';
import { store } from './store/store.js';
import './components/index.js';

class App1 extends ConnectedElement {

    view() {

        const { edit } = this.getStore().getState();

        const targetView = edit
            ? html`<app-1-name-input> </app-1-name-input>`
            : html`<app-1-name-view></app-1-name-view>`;

        return html`

         <h2>Check in</h2>
        
         ${ targetView }

        `;
    }

    getStore() {
        return store;
    }

}

customElements.define('app-1', App1);
