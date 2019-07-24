import { applyMiddleware, compose } from 'redux';
import middlewares from 'src/vm.domain/middlewares/index';

const bindMiddlewares = applyMiddleware(...middlewares);

export default compose(bindMiddlewares);

