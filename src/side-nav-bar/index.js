import React, { Component } from 'react'
import Image from './logo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import AccordionPage from '../route-pages/accordion'


import './_style.scss'

class SideNavBar extends Component {
  render () {
    const blk = 'side-nav-bar'
    return (
      <Router>
        <div className={`${blk}__container`}>
          <div className={`${blk}__icon-container`}>
            <img src={Image} className={`${blk}__logo `}/>
            <span className={`${blk}__logo-text`}>CSS Library</span>
          </div>
          <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          </div>
          <Switch>
          <Route exact path="/accordion" component={AccordionPage}/>
          <Route path="/about">
            <h2>Hello</h2>
          </Route>
          <Route path="/dashboard">
            <h3>Hello</h3>
          </Route>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default SideNavBar
