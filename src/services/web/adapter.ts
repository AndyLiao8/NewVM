import modulesInfo from '../../view/register';
import { buildWeb } from '../../utils/storeHelper';

const actionMaps = buildWeb(modulesInfo)
export default (store, action) => {
    let handle = actionMaps[action.type];
    if (handle) {
        handle(store, action);
    }
};