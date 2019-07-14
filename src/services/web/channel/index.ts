import * as actionTypes from 'src/constants/actionType';
import * as siteConfigAPIHandle from './siteConfig';
import * as conversationAPIHandle from './conversation';
import { SiteConfig, Conversation } from 'src/state';
import { Store } from 'redux';
import * as actionCreator from 'src/actions/creator';

export default {
    [actionTypes.getSiteConfig](store: Store, action) {
        siteConfigAPIHandle.getSiteConfig(action.meta)
        .then((rsp: SiteConfig) => {
            console.log('actionTypes.selectMenu', rsp);
            store.dispatch(actionCreator.updateSiteConfig(rsp));
        });
    },
    [actionTypes.getConversations](store: Store, action) {
        conversationAPIHandle.getConversations()
        .then((rsp: Conversation[]) => {
            store.dispatch(actionCreator.updateConversations(rsp));
        });
    }
};