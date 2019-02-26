import { LitElement, html, css } from 'lit-element';
import * as iconset from '../iconset';

class ElIcon extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
      color: { type: String },
      size: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        line-height: 18px;
      }
  `;
  }

  constructor() {
    super();
    this.color = 'currentColor';
    this.size = '24';
  }

  render() {
    const {
      icon,
      color,
      size,
    } = this;

    return html`
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="${size}"
        height="${size}"
      >
        <g fill="${color}">
          ${iconset[icon]}
        </g>
      </svg>
    `;
  }
}

customElements.define('el-icon', ElIcon);
