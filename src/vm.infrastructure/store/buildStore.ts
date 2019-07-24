import { createStore } from 'redux';
import manageMiddleware from './manageMiddleware';
import manageReducer from './manageReducer';
import { getToken as getCurrentToken } from 'src/vm.domain/selectors';
import { Store } from 'redux';

let _store: Store = null;

export const getStore = () => _store;
export const getToken = () => {
    if (!_store) {
        throw new Error();
    }
    return getCurrentToken(_store.getState());
};

export default (initialState = null) => {
    _store = createStore(
        manageReducer,
        initialState,
        manageMiddleware,
    );
    return _store;
};