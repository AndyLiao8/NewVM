import { State } from 'src/vm.infrastructure/interfaces/IGlobalState';

export const getToken = (state: State) => state.session.token;
export const getRefreshToken = (state: State) => state.session.refreshToken;