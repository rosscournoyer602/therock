import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Landing from './containers/Landing';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import RequireAuth from './containers/auth/requireAuth';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import rootSaga from './sagas/sagas';
import GoogleAnalytics from 'react-ga';
import requireAuth from './containers/auth/requireAuth';

GoogleAnalytics.initialize('UA-116144571-1');
GoogleAnalytics.pageview(window.location.pathname + window.location.search);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers, 
  composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={Landing} />
      </Router>
    </Provider>
, document.getElementById('root'));
