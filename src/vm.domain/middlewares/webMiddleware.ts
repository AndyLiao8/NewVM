import webAdapter from 'src/vm.domain/middlewares/webMaps/adapter';

export default store => next => (action) => {
    webAdapter(store, action);
    return next(action);
};