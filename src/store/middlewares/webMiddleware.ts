import webAdapter from 'src/services/webAdapter';

export default store => next => (action) => {
    webAdapter(store, action);
    return next(action);
};