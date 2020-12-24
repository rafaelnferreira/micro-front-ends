import { ConnectedElement } from '../../../libs/shared.js';
import { inputName, leaveEditName } from '../actions/actions.js';
import { html } from '../../../libs/lit-html.js';
import { store } from '../store/store.js';

class NameInput extends ConnectedElement {

    connectedCallback() {
        super.connectedCallback();
        const { name } = this.getStore().getState();
        this.name = name;
    }

    view() {

        const change = e => {
            this.name = e.target.value;
            this.render();
        };

        const save = _ => {
            inputName(this.name);
            leaveEditName();
        };

        const invalid = !this.name || this.name.length < 3;

        return html`
        
        <style>
            div {
                display: inline-block;
            }
        </style>
        
        <span>Provide your name (min tree characters)</span>

        <div>
            
            <input type="text" required @keyup="${ change }" />
            
            <button type="button" ?disabled=${invalid} @click="${ save }">
                OK
            </button>
            
        </div>
        `
    }

    getStore() {
        return store;
    }
}

customElements.define('app-1-name-input', NameInput);