import React from "react";
// import Modal from "react-bootstrap/Modal";
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import ReactDOM from "react-dom";
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import MyVerticallyCenteredModal from "./Popup";
import Operation from "./Operation";
import ApiData from "./ApiData";
import LoveCalc from "./LoveCalc";
import VideoMp3 from "./VideoMp3";
import HomePage from "./HomePage";
import TestPage from "./TestPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function Navigation(props) {
  const [modalShow, setModalShow] = React.useState(false);



  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand mx-3" to="/">{props.Title}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/operation">Operation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/apidata">Data</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/love">LoveCount</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Download">VideoMp3</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/test">Test</Link>
              </li>

              <button className="btn btn-primary " onClick={() => setModalShow(true)}>
                Add
              </button>
            </ul>
            {/* <form className="form-inline  d-flex" style={navstyle}>
              <input className="form-control mr-sm-2" style={{ marginRight: '10px' }} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success my-2 my-sm-0" type="submit" style={{ marginRight: '5px' }}>Search</button>
            </form> */}

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </nav>
        <Switch>
          <Route path="/operation">
            <Operation />
          </Route>
          <Route path="/apidata">
            <ApiData />
          </Route>
          <Route path="/home">
          <HomePage/>
          </Route>
          <Route path="/love">
            <LoveCalc />
          </Route>
          <Route path="/Download">
            <VideoMp3 />
          </Route>
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/">
          <HomePage/>
          </Route>

        </Switch>
      </Router>

    </>
  );
}
export default Navigation;

