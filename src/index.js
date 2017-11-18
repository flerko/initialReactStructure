import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import store from './stores/store';
import MainPage from './pages/main/Main';

import './index.css';
import 'normalize.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/hui' component={MainPage}/>
        </Router>
    </Provider>, document.getElementById('root')
);
