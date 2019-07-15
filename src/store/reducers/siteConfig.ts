import * as actionTypes from 'src/constants/actionType';
import { SiteConfigState } from 'src/state';

const defaultState:  SiteConfigState = {
    isLoading: false,
    config: {
        defaultTwitterAmount: -1,
        isPartnerSite: false,
        maxTwitterAmount: -1,
        siteId: -1,
    },
};

const stateMapping = {
    [actionTypes.getSiteConfig](state: SiteConfigState){
        return Object.assign({}, state, {
            isLoading: true,
        });
    },
    [actionTypes.updateConfig](state:SiteConfigState, action) {
        return Object.assign({}, state, {
            isLoading: false,
            config: Object.assign({}, state.config, action.payload),
        });
    }
};

export default (state: SiteConfigState = defaultState, action) => {
    const handler = stateMapping[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}