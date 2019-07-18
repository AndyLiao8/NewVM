import { Store } from 'redux';
import * as allTypes from 'src/vm.domain/actionTypes';

export default {
    [allTypes.getTags](store: Store, action) {
        console.log('allTypes.getArticles');
    }
};