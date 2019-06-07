import React from 'react';
import ReactDOM from 'react-dom';
//css imports
import './index.css';
//app component import
import App from './components/App/App';
//import redux 
import { Provider } from 'react-redux'; //provides store to whole app
//import store
import { store } from "./helpers";//store containing the reducers

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
