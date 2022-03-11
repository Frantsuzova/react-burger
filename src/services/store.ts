import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers =
    typeof window === 'object' && composeWithDevTools
        ? composeWithDevTools({})
        : compose;

const enchancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enchancer);
