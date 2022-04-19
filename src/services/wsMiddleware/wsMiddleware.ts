import { Dispatch, Action } from 'redux'
import { TWsActions } from '../types/types';
import { Middleware } from 'redux';

interface IEvent {
    data: string,
    message: string
}
interface A<T = any> {
    value: T
}


export const wsMiddleware = (wsActions: TWsActions): Middleware => {
    return (store: { dispatch: Dispatch }) => {
        let socket: any = null;

        return (next: Dispatch) => (action: A & Action) => {
            const { dispatch } = store;
            const { type, value } = action;
            const {
                wsInit,
                onSend,
                onOpen,
                onClose,
                onError,
                onMessage,
                ordersInit
            } = wsActions;


            if (type === wsInit) {
                socket = new WebSocket(value);
            }

            if (type === onClose) {
                socket.close("1000", "User left the page that has socket");
            }
            if (socket) {
                socket.onopen = (event: IEvent): void => {
                    dispatch({ type: onOpen, value: event });
                };
                socket.onmessage = (event: IEvent): void => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);

                    dispatch({ type: onMessage, value: parsedData });

                    dispatch({ type: ordersInit, value: parsedData });
                };
                socket.onerror = (event: IEvent): void => {

                    dispatch({ type: onError, value: event });

                };
                socket.onclose = (event: IEvent): void => {
                    dispatch({ type: onClose, value: event });
                };

                socket.send = (event: IEvent): void => {
                    dispatch({ type: onSend, message: value })
                }
            }

            next(action);
        };
    };
};