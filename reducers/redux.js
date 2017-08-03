import {applyMiddleware,combineReducers,createStore,} from 'redux';
import thunk from 'redux-thunk';


export default function CounterApp(state = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return state = state + 1;
        case "DECREMENT":
            return state = state - 1;
            default:
            return state;
    }
    return state;
}

