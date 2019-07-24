import ISession from 'src/vm.infrastructure/interfaces/ISession';
import Action from 'src/vm.domain/actions/action';

export const updateSession = (state: ISession, action: Action<null, ISession>): ISession => {
    return Object.assign({}, state, action.payload);
};