export default ({
  onHeartbeat,
  getPeriod,
}) => (store) => {
  let timer = null;
  let interval = 4 * 1000;

  const start = () => {
    if (timer === null) {
      timer = setInterval(onHeartbeat.bind(null, store), interval);
      onHeartbeat(store);
      
    }
  };

  const stop = () => {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  };

  const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const newInterval = getPeriod(state);
    if (interval !== newInterval) {
      interval = newInterval;
      stop();
    }
    start();
  });

  return () => {
    unsubscribe();
    stop();
  };
};
