import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
// //3 parameters required to create store - reducer, preLoaded state, enhancer
// const store = createStore(() => [], {}, applyMiddleware())

const initialState = {};

const middleware = [thunk];
//enhancer - applymiddleware
const store = createStore(
    rootReducer, 
    initialState, 
    compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;