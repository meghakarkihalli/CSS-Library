import React, { Component } from 'react'
import Accordion from '../../components/accordion'

import './_style.scss'

const blk = 'accordion-page'

class AccordionPage extends Component {
  render() {
    return (
      <div>
        <h1>Accordions</h1>
        <p>With accordion user can decide
          <ul>
            <li>when to show or hide content</li>
            <li>whether to keep the content open always</li>
          </ul>
        </p>
        <p>
          By default accordion takes up width of its parent
        </p>
        <h2>Types:</h2>
        <ul>
          <li>
            <h3>Default Accordion</h3>
            <div className={`${blk}__exandable`}>
              <Accordion >
                <h1>Hello</h1>
              </Accordion>
            </div>
          </li>
          <li>
            <h3>Expanded Accordion</h3>
            <div className={`${blk}__exandable`}>
              <Accordion expanded>
                <h1>Hello</h1>
              </Accordion>
            </div>
          </li>
          <li>
            <h3>Click Accordion header to expand</h3>
            <div className={`${blk}__exandable`}>
              <Accordion headerAsButton>
                <h1>Hello</h1>
              </Accordion>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default AccordionPage
