import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import AppHeader from './components/welcome.jsx';
import Introduction from './components/introduction.jsx';
injectTapEventPlugin();

ReactDOM.render(<Introduction />, document.getElementById('container'));
