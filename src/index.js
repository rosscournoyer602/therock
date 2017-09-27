import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers, 
  composeWithDevTools(
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
, document.getElementById('root'))
