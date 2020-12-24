import { TemplateElement } from "../libs/shared.js";
import { html } from "../libs/lit-html.js";

class Home extends TemplateElement {

    constructor() {
        super();
    }

    view() {


        return html `

            <style>
                @import '../style.css';
            </style>

            <h2>Welcome</h2>
            
            <p>
            This sample demonstrates how several applications can be built and integrated only using <strong>WebStandards</strong>
            and a minimal set of frameworks: <a href="https://redux.js.org/" target="_blank" rel="noreferrer">Redux</a>, <a href="https://lit-html.polymer-project.org/" target="_blank" rel="noreferrer">lit-html</a>
            and <a href="https://vaadin.com/router" target="_blank" rel="noreferrer">vaadin-router</a>. 
            </p>
            
            <p>
            Check in via the first app and build a simple todo list in the Todo APP. Notice that the state of the fist app is shared with the second via local storage.
            </p>
    `
    }

}

customElements.define('app-home', Home);
