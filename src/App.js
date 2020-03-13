import React from "react";
import SideNavBar from "./side-nav-bar";
import TopMenuBar from "./top-menu-bar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AccordionPage from "./route-pages/accordion";

import "./_style.scss";

const blk = "side-nav-bar";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="top-menu">
          <TopMenuBar />
        </div>
        <div className="content">
          <div className="side-menu">
            <div className={`${blk}__container`}>
              <div className={`${blk}__list`}>
                <Link className={`${blk}__list-item`} to="/accordion">Accordion</Link>
                <Link className={`${blk}__list-item`} to="/about">About</Link>
                <Link className={`${blk}__list-item`} to="/users">Users</Link>
              </div>
            </div>
          </div>
          <div className="main">
            <Switch>
              <Route exact path="/accordion" component={AccordionPage} />
              <Route path="/about">
                <h2>Hello</h2>
              </Route>
              <Route path="/dashboard">
                <h3>Hello</h3>
              </Route>
            </Switch>
          </div>
        </div>
        {/* <div className="footer">
          <h1>Footer</h1>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
