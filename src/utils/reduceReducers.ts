import _ from 'lodash';

export default (reducers, order = null) => {
  let keys = Object.keys(reducers);
  if (order)
    keys = order.filter(key => typeof reducers[key] === 'function');

  _.each(Object.keys(reducers), (key) => {
    if (keys.indexOf(key) >= 0) return;
    keys.push(key);
  });
  function reducer(oldState = { }, action) {
    const state = Object.assign({}, oldState);
    let hasChanged = false;
    const newState = keys.reduce((currentState, key) => {
      const currentPart = reducers[key](currentState[key], action, currentState);
      hasChanged = hasChanged || currentPart !== currentState[key];
      currentState[key] = currentPart;  // eslint-disable-line no-param-reassign
      return currentState;
    }, state);
    if (!hasChanged) return oldState;
    return newState;
  }
  return (oldState, action) => reducer(oldState, action);
};
