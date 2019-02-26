import { Scene } from 'three/src/scenes/Scene';
import { Color } from 'three/src/math/Color';
import { DirectionalLight } from 'three/src/lights/DirectionalLight';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { AxesHelper } from 'three/src/helpers/AxesHelper';
import { Vector2 } from 'three/src/math/Vector2';
import { Raycaster } from 'three/src/core/Raycaster';
import OrbitControls from './controls/OrbitControls';
import { BaseElement, html, css } from '../base-element';


export class ViewPanel extends BaseElement {
  static get properties() {
    return {
      selected: { type: Object },
    };
  }

  constructor() {
    super();
    this.objects = [];
    this.scene = new Scene();
    this.renderer = new WebGLRenderer();
    this.camera = new PerspectiveCamera(100, 2, 0.1, 1000);
    this.light1 = new DirectionalLight(0xFFFFFF, 1);
    this.light2 = new DirectionalLight(0xFFFFFF, 1);
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.containerElement = this.shadowRoot.querySelector('#container');

    this.camera.position.set(20, 20, 20);

    this.light1.position.set(-1, 2, 4);
    this.light2.position.set(1, -2, -4);

    this.renderer.setSize(this.containerElement.clientWidth, this.containerElement.clientHeight);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableKeys = false;
    this.containerElement.appendChild(this.renderer.domElement);
    this.controls.update();

    this.axesHelper = new AxesHelper(20);

    this.scene.background = new Color(0xFFFFFF);
    this.scene.add(this.light1);
    this.scene.add(this.light2);
    this.scene.add(this.axesHelper);

    window.addEventListener('resize', this.handleWindowResize.bind(this), false);
    this.containerElement.addEventListener(
      'mousedown',
      this.handleDocumentMouseDown.bind(this),
      false,
    );

    this.render3d();
  }

  addObject(obj) {
    this.objects.push(obj);
    this.scene.add(obj);
  }

  handleWindowResize() {
    const dom = this.containerElement;
    this.camera.aspect = dom.clientWidth / dom.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(dom.clientWidth, dom.clientHeight);
  }

  handleDocumentMouseDown(event) {
    event.preventDefault();
    const dom = this.renderer.domElement;
    const mouse = new Vector2();
    const raycaster = new Raycaster();
    mouse.x = ((event.clientX - dom.offsetLeft) / dom.width) * 2 - 1;
    mouse.y = -((event.clientY - dom.offsetTop) / dom.height) * 2 + 1;

    raycaster.setFromCamera(mouse, this.camera);
    const intersects = raycaster.intersectObjects(this.objects, true);

    if (intersects.length > 0) {
      this.selected = intersects[0].object;
      this.emit('selected-changed', this.selected);

      event.preventDefault();
    }
  }

  render3d() {
    requestAnimationFrame(this.render3d.bind(this));
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  clean3d() {
    this.objects.forEach(obj => {
      this.scene.remove(obj);
    });
    this.objects = [];
    this.selected = null;

    this.emit('objects-changed', this.objects);
    this.emit('selected-changed', this.selected);
  }

  static get styles() {
    return css`
      :host,
      #container {
        display: flex;
        width: 100%;
        height: 100%;
      }
    `;
  }

  render() {
    return html`
      <div id="container"></div>
    `;
  }
}


customElements.define('view-panel', ViewPanel);
