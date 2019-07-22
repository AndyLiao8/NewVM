import ISession from 'src/vm.domain/interfaces/ISession';
import * as types from 'src/vm.domain/actionTypes/session';
import * as sessionService from 'src/vm.domain/reducers/service/sessionService';

const defaultState: ISession  = {
    refreshToken: null,
    token: null,
};

const stateMapping = {
    [types.updateSession]: sessionService.updateSession,
};

export default (state: ISession = defaultState, action) => {
    const handler = stateMapping[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}