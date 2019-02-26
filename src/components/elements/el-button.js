import { BaseElement, html, css } from '../base-element';

class ElButton extends BaseElement {
  static get properties() {
    return {
      type: { type: String },
      label: { type: String },
      variant: { type: String },
      disabled: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      
      .el-button {
        position: relative;
        display: inline-flex;
        box-sizing: border-box;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        border-radius: var(--app-border-radius);
        outline: none;
        cursor: pointer;
        height: var(--app-size-height-md);
        font-weight: 600;
        font-size: var(--app-font-size-md);
        padding: 0 12px;
      }
     
      .primary {
        background-color: var(--el-button-primary-background);
        color: var(--el-button-primary-text);      
      }
      
      .primary:hover {
        background-color: var(--el-button-primary-background--hover);
      }
      
      .primary:focus {
        background-color: var(--el-button-primary-background--focus);
        outline: none;
      }
      
      .primary:active {
        background-color: var(--el-button-primary-background--active);
      }
      
      .primary[disabled] {
        background-color: var(--el-button-primary-background--disabled);
        color: var(--el-button-primary-text--disabled);
        pointer-events: none;
      }
      

      .secondary {
        background-color: var(--el-button-secondary-background);
        color: var(--el-button-secondary-text);      
      }
      
      .secondary:hover {
        background-color: var(--el-button-secondary-background--hover);
      }
      
      .secondary:focus {
        background-color: var(--el-button-secondary-background--focus);
        outline: none;
      }
      
      .secondary:active {
        background-color: var(--el-button-secondary-background--active);
      }
      
      .secondary[disabled] {
        background-color: var(--el-button-secondary-background--disabled);
        color: var(--el-button-secondary-text--disabled);
        pointer-events: none;
      }
  `;
  }

  constructor() {
    super();
    this.type = 'button';
    this.variant = 'primary';
  }

  render() {
    const {
      type,
      label,
      variant,
      disabled,
    } = this;

    return html`
      <button
        type="${type}"
        class="el-button ${variant}"
        aria-label="${label}"
        ?disabled="${disabled}"
      >
        ${label}
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('el-button', ElButton);
