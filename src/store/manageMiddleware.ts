import { applyMiddleware, compose } from 'redux';
import middlewares from './middlewares/index';

const bindMiddlewares = applyMiddleware(...middlewares);

export default compose(bindMiddlewares);

