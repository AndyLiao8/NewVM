import webAdapter from 'src/vm.infrastructure/web/adapter';

export default store => next => (action) => {
    webAdapter(store, action);
    return next(action);
};