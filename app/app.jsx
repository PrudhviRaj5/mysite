import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import history from 'utils/history';
import App from 'containers/App';
import 'sanitize.css/sanitize.css';


const MOUNT_NODE = document.getElementById('app');

const renderApp = () => {
  ReactDOM.render(
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    renderApp();
  });
}

renderApp();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
