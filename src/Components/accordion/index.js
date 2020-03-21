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
    const { children, expanded, headerAsButton } = this.props
    const { isOpen } = this.state
    const showIcon = !expanded && !headerAsButton
    const makeHeaderButton = !expanded && headerAsButton
    const trans = (isOpen || expanded ) ? 'open' : 'close'
    return (  
      <div className={`${blk}__container`}>
        {expanded && (
          <div className={`${blk}__header`}>
            <div className={`${blk}__header--title`}>Accordion Title</div>
          </div>
          )
        }
        {showIcon && (
          <div className={`${blk}__header`}>
            <div className={`${blk}__header--title`}>Accordion Title</div>
              <div className={`${blk}__header--toggle`}>
                <a className={`${blk}__header--sign`} href='/' onClick={this.toggleAccordion}>
                  {isOpen ? '-' : '+'}
                </a>
              </div>
          </div>
          )
        }
        {makeHeaderButton && (
          <div className={`${blk}__header`}>
            <button className={`${blk}__header-button`} onClick={this.toggleAccordion}>
              <div className={`${blk}__header--title`}>Accordion Title</div>
            </button>
          </div>
          )
        }
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
