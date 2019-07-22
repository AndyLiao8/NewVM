import { State } from 'src/vm.domain/interfaces/IGlobalState';

export const getToken = (state: State) => state.session.token;
export const getRefreshToken = (state: State) => state.session.refreshToken;