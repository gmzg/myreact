
import React from 'react'
import "images/icon/iconfont.css"
import 'styles/reset.css'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import {Provider} from 'react-redux'
import App from "./App"
import store from './store'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)