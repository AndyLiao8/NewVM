import { Store } from 'redux';
import Action from 'src/vm.domain/actions/action';
import * as sessionActions from 'src/vm.domain/actions/sessionActions';
import * as sessionSelectors from 'src/vm.domain/selectors/session';

export const refreshToken = (store: Store, action: Action<null, string>) => {
    setTimeout(() => {
        store.dispatch(sessionActions.updateSession({
            refreshToken: `refresh-token_${Date.now()}`,
            token: `token_${Date.now()}`,
        }));
    }, 500);
};

export const retrieveToken = (store: Store) => new Promise((reslove, reject) => {
    const token = sessionSelectors.getToken(store.getState());
    if (token) {
        reslove(token);
        return;
    }
    setTimeout(() => {
        const refreshToken = `refresh-token_${Date.now()}`;
        const token = `token_${Date.now()}`;
        store.dispatch(sessionActions.updateSession({
            refreshToken,
            token,
        }));
        reslove(token);
    }, 500);
});

