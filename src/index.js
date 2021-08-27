import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './store';

import App from './App';

const sagaMiddleware = createSagaMiddleware();

const devMode = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: window.__PRELOAD_STATE__,
  middleware: [sagaMiddleware],
  devTools: devMode,
});

const Root = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};
const root = document.getElementById('root');

sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV === 'production') {
  ReactDOM.hydrate(<Root />, root);
} else {
  ReactDOM.render(<Root />, root);
}

serviceWorker.unregister();
