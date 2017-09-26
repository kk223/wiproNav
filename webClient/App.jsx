
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppHeader from './components/welcome.jsx';
import Entrance from './components/entranceAnimation.jsx';
import EnsureLoggedInContainer from './EnsureLoggedInContainer.jsx';
injectTapEventPlugin();

ReactDOM.render((
  <Router history={hashHistory}>
        <Route path="/" component={AppHeader}>
            <Route path="/Home" component={Entrance}/>
            <Route component={EnsureLoggedInContainer}>
            </Route>
        </Route>
    </Router>
), document.getElementById('container'));
