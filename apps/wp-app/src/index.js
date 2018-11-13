import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import { App } from 'wp-core';  // This works but prefer deep import below
import App from 'wp-core/dist/containers/App'; // Really want to git rid of /dist/ here
// import App from 'wp-core/containers/App';  // This would be the ideal import but doesn't work

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
