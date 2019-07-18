import { Map } from 'immutable';
import { ITags } from 'src/vm.domain/interfaces/IGlobalState';
import * as types from 'src/vm.domain/actionTypes/tag';
import Action from '../actions/action';
import Tag from '../interfaces/ITag';

const defaultState:  ITags = {
    ifLoading: false,
    tags: Map(),
};

const stateMapping = {
    [types.getTags](state: ITags) {
        return Object.assign({}, state, {
            ifLoading: true,
        });
    },
    [types.updateTags](state: ITags, action: Action<number, Map<number, Tag>>) {
        return Object.assign({}, state, {
            ifLoading: false,
            tags: state.tags.merge(action.payload),
        });
    }
};

export default (state: ITags = defaultState, action) => {
    const handler = stateMapping[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}