import conversation from './conversation';
import siteConfig from './siteConfig';

export const reducerOrder = [ 'siteConfig', 'conversation' ];

export default {
    conversation,
    siteConfig,
};