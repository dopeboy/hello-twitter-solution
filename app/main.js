import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { browserHistory, IndexRoute, Router, Route, Link, withRouter } from 'react-router'
import UserProfile from './components/UserProfile/UserProfile';

// Just one route - for the user profile page
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={UserProfile}/>
        </Route>
    </Router>
), document.getElementById('root'));
