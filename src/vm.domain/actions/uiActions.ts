import Action from './action';
import * as uiTypes from 'src/vm.domain/actionTypes/ui';

export const updateGlobalError = (err: string): Action<any, string> => ({
    type: uiTypes.globalError,
    payload: err,
});