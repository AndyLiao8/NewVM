import subscriptions from './subscriptions/index'

export default (store) => {
    let unsubscriptions = subscriptions.map(subscription => subscription(store));

    if (module.hot) {
        module.hot.accept('./subscriptions/index', () => {
        unsubscriptions.forEach(unsubscribe => unsubscribe());
        /* eslint-disable global-require */
        unsubscriptions = subscriptions.map(subscription => subscription(store));
        });
    }
};