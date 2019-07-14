import Client from './restClient';

const API = "https://private.comm100.com/socialapi/api/site/config";
export const getSiteConfig = (siteId: number) => {
    const client = new Client(API)
    return client.get({
        siteId,
    });
};