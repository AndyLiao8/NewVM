
import Action from 'src/vm.domain/actions/action';
import IUI from 'src/vm.infrastructure/interfaces/IUI';

export const updateGlobalError = (state: IUI, action: Action<any, string>): IUI => {
    return {...state, error: action.payload};
};