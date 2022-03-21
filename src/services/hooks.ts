import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
} from 'react-redux';

import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from './store';
import { TIndexActions } from './actions/index';

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, Action, RootStore, TIndexActions>
>;

export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
export const useSelector: TypedUseSelectorHook<RootStore> = selectorHook;