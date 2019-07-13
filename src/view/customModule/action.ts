import * as actionTypes from '../../constants/actionType';

export interface SiteConfig{
    defaultTwitterAmount: number;
    isPartnerSite: boolean;
    maxTwitterAmount: number;
    siteId: string;
}

export const getSiteConfig = (siteId: number) => ({
    type: actionTypes.siteConfig,
    meta: siteId,
});

export const updateSiteConfig = (siteConfig: SiteConfig) => ({
    type: actionTypes.updateConfig,
    payload: siteConfig,
});