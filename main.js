import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterApp from './reducers/redux';
//import CounterApp from './reducers/redux';
const store = createStore(CounterApp);
import Counter from './component/counter';

render(
    <div>
    <Provider store={store}>
<Counter/>
    </Provider>
    </div>
,document.getElementById('app'));
    
