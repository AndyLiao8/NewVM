import { createStore } from 'redux';
import manageMiddleware from './manageMiddleware';
import manageReducer from './manageReducer';
import manageSubscribe from './manageSubscribe';

let _store = null;

export const getStore = () => _store;

export default (initialState = null) => {
    _store = createStore(
        manageReducer,
        null,
        manageMiddleware,
    );
    manageSubscribe(_store);
    return _store;
};