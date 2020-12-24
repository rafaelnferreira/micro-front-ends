import { ConnectedElement } from '../../../libs/shared.js';
import { html } from '../../../libs/lit-html.js';
import { enterEditName } from '../actions/actions.js';
import { store } from '../store/store.js';

class NameView extends ConnectedElement {

    view() {

        const { name } = this.getStore().getState();

        return html `
        
        <style>
        /* tag <a> not cascading the style for some reason (browser firefox) */
        @import '../../../style.css';
        </style>


        <h3>Welcome ${name}, you have been checked-in and now can proceed to other Apps! </h3>
        <small>
            <span>Not you? </span> <a href="#" @click="${_ => enterEditName()}">sign out</a>
        </small>
        `
    }

    getStore() {
        return store;
    }
}

customElements.define('app-1-name-view', NameView);