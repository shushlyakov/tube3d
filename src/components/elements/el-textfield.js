import { BaseElement, html, css } from '../base-element';

class ElTextfield extends BaseElement {
  static get properties() {
    return {
      type: { type: String },
      label: { type: String },
      value: { type: String },
      variant: { type: String },
      placeholder: { type: String },
      disabled: { type: Boolean },
      min: { type: Number },
      max: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        margin-bottom: var(--app-margin-y-md);
      }

      .input-container {
        display: flex;
        align-items: center;
        width: 100%;
      }
        
      label {
        white-space: nowrap;
        margin-right: 16px;
        margin-bottom: 0;
        font-weight: 400;
      }
      
      input {
        font: var(--app-font-family);
        box-sizing: border-box;
        height: 32px;
        padding: 0 12px;
        width: 100%;
        outline: none;
        border: 1px solid #DCDEE1;
        border-radius: 4px;
        color: #1D2734;
        line-height: 1.15;
        margin: 0;
        overflow:visible;
      }
      
      .suffix::slotted(*) {
        margin-left: 12px;
      }
  `;
  }

  constructor() {
    super();
    this.type = 'text';
  }

  render() {
    const {
      type,
      label,
      value,
      placeholder,
      min,
      max,
    } = this;

    return html`
      <div class="input-container">
        <label>${label}</label>
        <input
          type="${type}" 
          .value="${value}"
          placeholder="${placeholder}" 
          @input=${(e) => this._handleInput(e)} 
          @keypress=${this._handleKeyPress}
          aria-label="${label}"
          min="${min}"
          max="${max}"
        >
      </div>
      <slot class="suffix" name="suffix"></slot>
    `;
  }

  _handleInput(e) {
    this.value = e.currentTarget.value;
  }

  _handleKeyPress(e) {
    if (e.target.value !== '') {
      if (e.key === 'Enter') {
        this.emit('key-enter', { value: e.target.value });
      }
    }
  }

  updated(changedProps) {
    if (changedProps.has('value')) {
      this.emit('value-changed', { value: this.value });
    }
  }
}

customElements.define('el-textfield', ElTextfield);
