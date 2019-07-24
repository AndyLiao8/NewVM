import reduceReducers from 'src/utils/reduceReducers';
import reducers, { reducerOrder } from 'src/vm.domain/reducers';

const reducer = reduceReducers(reducers, reducerOrder);

export default (state, action) => reducer(state, action);