import { LitElement, html, css } from 'lit';
import { bulma } from './bulma-encapsulated';

class BulmaLit extends LitElement {
  static styles = [bulma];
  
  static properties = {
    title: { type: String }
  }

  constructor() {
    super();
    this.title = 'Hello, World!'
  }

  render() {
    return html`
      <section class="section">
        <div class="container has-text-centered">
          <h1 class="title has-text-white is-family-primary">
            ${this.title}
          </h1>
          <p class="subtitle is-family-primary">
            My first web app component lit element styled with
            <strong class="has-text-success">Bulma</strong>!
          </p>
          <div class="columns">
            <div class="column">
              <div class="notification is-primary has-text-black is-family-primary">First column</div>
            </div>
            <div class="column">
              <div class="notification is-danger has-text-black is-family-primary">Second column</div>
            </div>
            <div class="column">             
              <div class="notification is-warning has-text-black is-family-primary">Third column</div>
            </div>
            <div class="column">
              <div class="notification is-info has-text-black is-family-primary">Fourth column</div>
            </div>
          </div>
        </div>
      </section>      
      `;
  }
}

customElements.define('bulma-lit', BulmaLit);