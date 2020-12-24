import { Router } from '../libs/vaadin-router.js';
import { html } from '../libs/lit-html.js';
import { loadApps } from './actions.js';
import './Home.js';
import './ThemeButton.js';
import { TemplateElement } from '../libs/shared.js';

const outlet = document.querySelector('output');
const router = new Router(outlet);


class AppMenu extends TemplateElement {

    constructor() {
        super();
    }

    async connectedCallback() {
        const items = await loadApps();
        this.items = [
            { name : 'Home', path : '/', component : 'app-home' },
            ...items.map(i => ({ ...i, bundle : { module : i.bundle } }))
        ];
        await router.setRoutes(this.items);
        super.connectedCallback();
    }

    view() {
        return html`

        <style>
            
            .topnav {
              background-color: #005ba1;
              overflow: hidden;
            }
            
            .topnav a {
              float: left;
              display: block;
              color: white;
              text-align: center;
              padding: 14px 16px;
              text-decoration: none;
              font-size: 17px;
            }
             
        </style>
        
        <div class="topnav"> 
            ${ this.items.map((item) => html`<a href="${ item.path }">${ item.name }</a>`) } 
            
        </div>
            
    `;
    }


}

customElements.define('app-menu', AppMenu);