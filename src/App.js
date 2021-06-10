// App.js

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Luo from "./components/luo";
import Muokkaa from "./components/muokkaa";
import Listaa from "./components/listaa";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={"/"} className="navbar-brand">
                            Tietokanta esimerkki
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link">
                                        Koti
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/create"} className="nav-link">
                                        Lomake
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/index"} className="nav-link">
                                        Lista
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>{" "}
                    <br />
                    <h2>Tervetuloa Tietokantaesimerkkiin</h2> <br />
                    <Switch>
                        <Route exact path="/create" component={Luo} />
                        <Route path="/edit/:id" component={Muokkaa} />
                        <Route path="/index" component={Listaa} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
