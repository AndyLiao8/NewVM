import webAdapter from 'src/vm.domain/middlewares/webMap/adapter';

export default store => next => (action) => {
    webAdapter(store, action);
    return next(action);
};