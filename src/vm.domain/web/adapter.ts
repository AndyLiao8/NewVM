import webMap from '.';

export default (store, action) => {
    if (!action) return;
    let handle = webMap[action.type];
    if (handle) {
        handle(store, action);
    }
};