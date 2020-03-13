import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import Image from "./logo.png";

import "./_style.scss";

class TopMenuBar extends Component {
  render() {
    const blk = "top-menu-bar";
    return (
      <div className={`${blk}__container`}>
        <button className={`${blk}__button`} onClick={this.signInModal}>
          <FontAwesome name="user" size="2x" />
          <span className={`${blk}__text`}>Sign In</span>
        </button>
        <div className={`${blk}__icon-container`}>
            <img src={Image} className={`${blk}__logo `} />
            <span className={`${blk}__logo-text`}>CSS Library</span>
          </div>
      </div>
    );
  }
}

export default TopMenuBar;
