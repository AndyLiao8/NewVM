import { openInBrowser } from '../../constants/actionType';
import { Store } from 'redux/index';

export default (store: Store) => next => (action) => {
    if (action.type === openInBrowser) {
        window.open(action.payload);
        return store.getState();
    }
    return next(action);
};