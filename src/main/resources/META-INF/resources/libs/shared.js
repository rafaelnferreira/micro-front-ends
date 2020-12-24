import { render } from './lit-html.js';

class ShadowElement extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({mode:"open"});
    }

}

class TemplateElement extends ShadowElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render()
    }

    render() {
        render(this.view(), this.root);
    }

    view() {

    }
}

class ConnectedElement extends TemplateElement {

    connectedCallback() {
        this.unsubscribe = this.getStore().subscribe(_ => this.render());
        super.connectedCallback();
    }

    disconnectedCallback() {
        this.unsubscribe();
    }

    getStore() {

    }

}

export { ShadowElement, TemplateElement, ConnectedElement};