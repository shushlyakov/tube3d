import { BaseElement, html, css } from './components/base-element';
import { SimpleMaterial } from './components/3d/materials/SimpleMaterial';
import { Tube } from './components/3d/objects/Tube';
import './components/3d/view-panel';
import './components/elements/el-button';
import './components/elements/el-icon';
import './components/elements/el-textfield';

class AppEditor extends BaseElement {
  static get properties() {
    return {
      depth: { type: Number },
      objects: { type: Array },
      selected: { type: Object },
    };
  }

  constructor() {
    super();
    this.objects = [];
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.viewPanel = this.shadowRoot.querySelector('view-panel');
  }

  handleDepthChanged(e) {
    this.depth = e.detail.value;
  }

  async handleSelected(e) {
    this.selected = e.detail;

    if (!this.selected) return;

    try {
      await fetch('api/selected', {
        method: 'POST',
        body: JSON.stringify({
          index: this.objects.indexOf(this.selected),
          depth: this.selected.geometry.parameters.options.depth,
          color: this.selected.material.color.getHexString(),
        }),
      });
    } catch (err) {
      console.error(err);
    }
  }

  handleObjects(e) {
    this.objects = e.detail;
  }

  getNextPosition() {
    let z = 0;
    if (this.objects.length > 0) {
      const prev = this.objects[this.objects.length - 1];
      z = prev.position.z + prev.geometry.parameters.options.depth;
    }

    return { x: 0, y: 0, z };
  }

  generateName() {
    return `Труба ${this.objects.length + 1}`;
  }

  async addTube() {
    if (this.depth <= 0) {
      return;
    }

    const material = new SimpleMaterial();
    const tube = new Tube(material, { depth: +this.depth });
    const position = this.getNextPosition();
    tube.name = this.generateName();
    tube.position.set(position.x, position.y, position.z);

    this.depth = '';
    this.viewPanel.addObject(tube);
  }

  async save() {
    const metadata = [];
    this.objects.forEach((obj, index) => {
      metadata.push({
        index,
        depth: obj.geometry.parameters.options.depth,
        color: obj.material.color.getHexString(),
      });
    });

    try {
      await fetch('api/save', {
        method: 'PUT',
        body: JSON.stringify(metadata),
      });
    } catch (err) {
      console.error(err);
    }
  }

  async clean() {
    this.viewPanel.clean3d();
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;
        height: 100%;
      }
      el-toolbar {
        width: var(--el-toolbar-width);
      }
      #container {
        display: flex;
        align-self: stretch;
        flex: 1;
      }
      .toolbar {
        display: flex;
        flex-direction: column;
        width: var(--el-toolbar-width);
        min-width: var(--el-toolbar-width);
        background-color: var(--el-toolbar-bg-color);
        padding: var(--app-padding-x-md) 0;
      }
      section {
        padding: 0 var(--app-padding-y-md);
      }
      hr {
        border: 0;
        border-top: 1px solid #DDE1E6;
        margin: 12px 0;
        height: 1px;
      }
    `;
  }

  render() {
    return html`
      <div class="toolbar">
        <section>
          <el-button label="Сохранить" @click=${this.save}></el-button>
          <el-button label="Очистить" variant="secondary" @click=${this.clean}></el-button>
        </section>
        <hr>
        <section>
          <h3>Объекты</h3>
          <ul>
            ${this.objects.map(obj => html`
              <li>${obj.name} (${obj.geometry.parameters.options.depth} пт)</li>
            `)}
          </ul>
          <el-textfield 
            label=""
            placeholder="Длина (пт)"
            type="number" 
            min="1"
            value="${this.depth}" 
            @value-changed=${this.handleDepthChanged}
            @key-enter=${this.addTube}
          >
            <el-button slot="suffix" variant="secondary" @click="${this.addTube}">
              <el-icon icon="add"></el-icon>
            </el-button>
          </el-textfield>
        </section>
         ${this.selected && html`
            <section>
              <h3>Свойства</h3>
              ${this.selected.name}
              <ul>
                <li>Длина: ${this.selected.geometry.parameters.options.depth} пт</li> 
                <li>Цвет: 0x${this.selected.material.color.getHexString()}</li>
              </ul>
            </section>
          `}
      </div>
      <view-panel 
        .objects="${this.objects}"
        @selected-changed=${this.handleSelected}
        @objects-changed=${this.handleObjects}
      >
      </view-panel>
    `;
  }
}

customElements.define('app-editor', AppEditor);
