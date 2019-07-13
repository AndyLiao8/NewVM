import webAdapter from '../../services/web/adapter';

export default store => next => (action) => {
    webAdapter(store, action);
    return next(action);
};