import { LitElement } from 'lit-element';

export * from 'lit-element';

export class BaseElement extends LitElement {
  emit(evtType, evtData, shouldBubble = false) {
    const evt = new CustomEvent(evtType, {
      detail: evtData,
      bubbles: shouldBubble,
      composed: true,
    });

    this.dispatchEvent(evt);
  }
}
