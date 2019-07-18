export default (store) => {
    const unsubscribe = store.subscribe(() => {
        console.log('idleTime', store.getState());
    });
    return unsubscribe;
};