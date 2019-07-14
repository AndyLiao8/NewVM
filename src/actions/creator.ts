import * as actionTypes from 'src/constants/actionType';
import { SiteConfig, Conversation } from 'src/state';

// for SiteConfig
export const getSiteConfig = (siteId: number) => ({
    type: actionTypes.getSiteConfig,
    meta: siteId,
});
export const updateSiteConfig = (siteConfig: SiteConfig) => ({
    type: actionTypes.updateConfig,
    payload: siteConfig,
});
// end

// for Conversation
export const getConversations = () => ({
    type: actionTypes.getConversations,
});
export const updateConversations = (conversations: Conversation[]) => ({
    type: actionTypes.updateConversations,
    payload: conversations,
});
//end
