import { Store } from 'redux';
import subscriber from 'src/vm.infrastructure/heartBeatHelper';
import { OAuthPeriod } from 'src/config';
import { refreshSession } from 'src/vm.domain/actions/sessionActions';
import * as sessionSelectors from 'src/vm.domain/selectors/session';

export default subscriber({
  onHeartbeat: (store: Store) => {
    console.log('refresh token');
    store.dispatch(refreshSession(sessionSelectors.getRefreshToken(store.getState())));
  },
  getPeriod: () => OAuthPeriod,
});
