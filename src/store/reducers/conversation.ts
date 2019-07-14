import { ConversationState } from 'src/state';
import * as actionTypes from 'src/constants/actionType';

const defaultState: ConversationState  = {
    isLoading: false,
    conversations: [],
};

const stateMapping = {
    [actionTypes.getConversations](state, action) {
        return Object.assign({}, state, {
            isLoading: true,
        });
    },
    [actionTypes.updateConversations](state, action) {
        return {
            isLoading: false,
            conversations: [].concat(action.payload),
        };
    }
};

export default (state: ConversationState = defaultState, action) => {
    const handler = stateMapping[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}