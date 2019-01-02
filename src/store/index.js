
import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers'

//解决异步问题
import thunk from 'redux-thunk'
const store = createStore(reducers,applyMiddleware(thunk))
export default store
