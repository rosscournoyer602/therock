import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers, 
  composeWithDevTools(
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
      <Router history={window.history}>
        <App />
      </Router>
    </Provider>
, document.getElementById('root'))
