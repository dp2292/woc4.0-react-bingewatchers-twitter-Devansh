import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
// import Home from './components/task'
import Auth from './components/auth'
import Home from './components/home'
import Trending from './components/trending'
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/trending" component={Trending}></Route>
                    <Route path="/auth" component={Auth}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}






