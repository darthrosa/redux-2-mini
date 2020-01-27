import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import hackerNewsReducer from './hackerNewsReducer';
import mediumReducer from './mediumReducer.js';

const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));