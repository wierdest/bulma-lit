/* eslint-disable no-unused-expressions */
import { html } from 'lit'
import { fixture, expect } from '@open-wc/testing'

import '../src/bulma-lit.js'

describe('BulmaLit', () => {
  let element
  beforeEach(async () => {
    element = await fixture(html`<bulma-lit></bulma-lit>`)
  })

  it('renders Hello, World!', () => {
    const h1 = element.shadowRoot.querySelector('h1')
    expect(h1).to.exist
    expect(h1.textContent.trim()).to.equal('Hello, World!')
  })

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible()
  })
})
