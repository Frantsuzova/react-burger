import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { wsMiddleware } from "../services/wsMiddleware/wsMiddleware";

import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE,
    WS_CONNECTION_START,
} from '../services/actions/webSocket';
import { GET_INFO_ONE_ORDER_SUCCESS } from '../services/actions/index';

export const wsActions = {
    wsInit: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onMessage: WS_GET_MESSAGE,
    onClose: WS_CONNECTION_CLOSED,
    onSend: WS_SEND_MESSAGE,
    onError: WS_CONNECTION_ERROR,
    ordersInit: GET_INFO_ONE_ORDER_SUCCESS,

};


const composeEnhancers =
    typeof window === 'object' && composeWithDevTools
        ? composeWithDevTools({})
        : compose;

const enchancer = composeEnhancers(applyMiddleware(thunk, wsMiddleware(wsActions)));

export const store = createStore(rootReducer, enchancer);
