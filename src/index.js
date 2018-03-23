import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import rootSaga from './sagas'
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-116144571-1')
GoogleAnalytics.pageview(window.location.pathname + window.location.search)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers, 
  composeWithDevTools(
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
, document.getElementById('root'))
