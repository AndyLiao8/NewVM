import ISession from 'src/vm.domain/interfaces/ISession';
import Action from 'src/vm.domain/actions/action';

export const updateSession = (state: ISession, action: Action<null, ISession>): ISession => {
    return Object.assign({}, state, action.payload);
};