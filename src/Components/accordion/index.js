import React, { Component, Children } from "react"
import './_style.scss'

const blk = "accordion";
class Accordion extends Component {
  state = {
    isOpen: false
  }
  toggleAccordion = (e) => {
    e.preventDefault()
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }
  render() {
    const { children, keepOpen } = this.props
    const { isOpen } = this.state
    const trans = isOpen ? 'open' : 'close'
    return (  
      <div className={`${blk}__container`}>
        <div className={`${blk}__header`}>
          <div className={`${blk}__header--title`}>Accordion Title</div>
          {!keepOpen && <div className={`${blk}__header--toggle`}>
            <a className={`${blk}__header--sign`} href='/' onClick={this.toggleAccordion}>
              {isOpen ? '-' : '+'}
            </a>
          </div>}
        </div>
        <div className={`${blk}__body-container--${trans}`}>
          <div className={`${blk}__body`}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion
