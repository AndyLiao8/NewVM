import webMap from '.';

export default (store, action) => {
    let handle = webMap[action.type];
    if (handle) {
        handle(store, action);
    }
};