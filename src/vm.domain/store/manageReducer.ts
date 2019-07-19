import reduceReducers from 'src/utils/reduceReducers';
import reducers, { reducerOrder } from '../reducers';

const reducer = reduceReducers(reducers, reducerOrder);

export default (state, action) => reducer(state, action);