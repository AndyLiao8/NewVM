import OAuth from './OAuth';

const subscriptions = [ OAuth ];

export default (store) => {
    let unsubscriptions = subscriptions.map(subscription => subscription(store));

  if (module.hot) {
    module.hot.accept('./index.ts', () => {
      unsubscriptions.forEach(unsubscribe => unsubscribe());
      /* eslint-disable global-require */
      unsubscriptions = subscriptions.map(subscription => subscription(store));
    });
  }
};
