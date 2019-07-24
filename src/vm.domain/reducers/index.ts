import article from './article';
import session from './session';
import ui from './ui'; 

export const reducerOrder = [ 'ui', 'session', 'article' ];

export default {
    ui,
    article,
    session,
};