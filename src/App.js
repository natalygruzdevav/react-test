import React, { Component } from 'react'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Autho from "./containers/Autho";
import Menu from "./components/Menu";

class App extends Component {
    render() {
        return <div>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Autho} />
                <Route path='/menu' component={Menu} />
                <Route path='/autho' component={Autho} />
              </Switch>
            </BrowserRouter>
          </div>
    }
}

export default App;
