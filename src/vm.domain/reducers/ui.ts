import IUI from 'src/vm.infrastructure/interfaces/IUI';
import * as types from 'src/vm.domain/actionTypes';
import * as uiService from 'src/vm.domain/reducers/service/uiService';

const defaultState: IUI  = {
    error: '',
};

const stateMapping = {
    [types.globalError]: uiService.updateGlobalError,
};

export default (state: IUI = defaultState, action) => {
    const handler = stateMapping[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}