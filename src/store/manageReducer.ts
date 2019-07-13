import reduceReducers from '../utils/reduceReducers';
import modulesInfo from '../view/register';
import { buildReducer } from '../utils/storeHelper';

const reducers = buildReducer(modulesInfo);
const reducer = reduceReducers(reducers);

export default (state, action) => reducer(state, action);