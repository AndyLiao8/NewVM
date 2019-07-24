import * as articleHandles from './article';
import * as sessionHandles from './session';
import * as allTypes from 'src/vm.domain/actionTypes';

const webMap = {
    [allTypes.getArticles]: articleHandles.getArticles,
    [allTypes.addTagToArticle]: articleHandles.addTagToArticle,
    [allTypes.deleteArticle]: articleHandles.deleteArticle,
    [allTypes.removeTagFromArticle]: articleHandles.removeTagFromArticle,
    [allTypes.addArticle]: articleHandles.addArticle,
    [allTypes.refreshToken]: sessionHandles.refreshToken,
};

export default (store, action) => {
    let handle = webMap[action.type];
    if (handle) {
        handle(store, action);
    }
};