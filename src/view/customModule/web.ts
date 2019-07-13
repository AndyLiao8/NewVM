import * as actionTypes from '../../constants/actionType';
import Client from '../../services/web/channel/restClient';
import { Store } from 'redux/index';
import { updateSiteConfig, SiteConfig } from './action';

const moduleURL = "https://private.comm100.com/socialapi/api/site/config";

const mappingAction = {
    [actionTypes.siteConfig](store: Store, action) {
        const client = new Client(moduleURL);
        client.get({
            siteId: action.meta,
        })
        .then((rsp: SiteConfig) => {
            console.log('actionTypes.selectMenu', rsp);
            store.dispatch(updateSiteConfig(rsp));
        });
    }
}

export default mappingAction;