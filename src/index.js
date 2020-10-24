import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';

import {BrowserRouter} from 'react-router-dom';


import {createStore,compose,applyMiddleware,combineReducers} from 'redux';

import {Provider} from 'react-redux';

//reducer 
import Authreducer from '../src/store/reducers/auth';
import exammingReducer from '../src/store/reducers/examming';

import thunk from 'redux-thunk';


const reducer = combineReducers({
   examming : exammingReducer,
   auth : Authreducer
});




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));






ReactDOM.render(<Provider store={store}>
   <BrowserRouter> <App/></BrowserRouter>
   </Provider>
   ,document.getElementById('root')
)