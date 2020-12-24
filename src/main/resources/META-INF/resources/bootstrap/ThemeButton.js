import { TemplateElement } from '../libs/shared.js';
import { html } from '../libs/lit-html.js';

const KEY_BOOSTRAP_THEME = 'bootstrap-theme';

class ThemeButton extends TemplateElement {
    constructor() {
        super();
        this.theme = localStorage.getItem(KEY_BOOSTRAP_THEME) || 'light';
    }

    view() {

        const opts = this.theme === 'dark'
            ? {
                bgColor : '#171717',
                fontColor : '#e3e3e3',
                footerColor: '#2e2e2e',
                link: '#4db2ff',
                next : 'light',
            }
            : {
                bgColor : 'white',
                fontColor : 'black',
                footerColor: '#e3e3e3',
                link: '#0065b3',
                next : 'dark',
            };

        document.documentElement.style.setProperty('--root-font-color', opts.fontColor);
        document.documentElement.style.setProperty('--root-bg-color', opts.bgColor);
        document.documentElement.style.setProperty('--root-footer', opts.footerColor);
        document.documentElement.style.setProperty('--root-link', opts.link);

        const themeSwitched = _ => {
            this.theme = opts.next;
            localStorage.setItem(KEY_BOOSTRAP_THEME, this.theme);
            this.render();
        }

        return html`
            <div>
            
            <span>Theme</span>

            <button @click="${ themeSwitched }">
                ${opts.next}
            </a>
            
            </div>
        `

    }


}

customElements.define('theme-button', ThemeButton);