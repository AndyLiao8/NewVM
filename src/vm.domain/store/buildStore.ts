import { createStore } from 'redux';
import manageMiddleware from './manageMiddleware';
import manageReducer from './manageReducer';

let _store = null;

export const getStore = () => _store;

export default (initialState = null) => {
    _store = createStore(
        manageReducer,
        null,
        manageMiddleware,
    );
    return _store;
};