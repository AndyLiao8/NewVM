import * as types from 'src/vm.domain/actionTypes/common';
import Action from './action';

export const openInBrowser = (url: string): Action<any, string> => ({
    type: types.openInBrowser,
    payload: url,
});