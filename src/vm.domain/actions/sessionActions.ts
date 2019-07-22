import ISession from 'src/vm.domain/interfaces/ISession';
import * as types from 'src/vm.domain/actionTypes/session';

export const updateSession = (session: ISession) => ({
    type: types.updateSession,
    payload: session,
});

export const refreshSession = (refreshToken: string) => ({
    type: types.refreshToken,
    payload: refreshToken,
});