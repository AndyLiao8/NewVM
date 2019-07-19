import webAdapter from 'src/vm.domain/web/adapter';

export default store => next => (action) => {
    webAdapter(store, action);
    return next(action);
};