import * as types from 'src/vm.domain/actionTypes/common';
import { Store } from 'redux';

export default (store: Store) => next => (action) => {
    if (action.type === types.openInBrowser) {
        window.open(action.payload);
        return store.getState();
    }
    return next(action);
};