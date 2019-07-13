import * as actionTypes from '../../constants/actionType';
export type customModuleState = {
    content: string,
 };
 
export const getDefaultState = (): customModuleState => ({
    content: "hello world",
 });

const stateMapping = {
    [actionTypes.siteConfig](state: customModuleState){
        return Object.assign({}, state, {
            content: 'loading...',
        });
    },
    [actionTypes.updateConfig](state:customModuleState, action) {
        return Object.assign({}, state, {
            content: JSON.stringify(action.payload),
        });
    }
};

export default (state: customModuleState = getDefaultState(), action) => {
    const handler = stateMapping[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}