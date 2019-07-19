import { Store } from 'redux';
import * as allTypes from 'src/vm.domain/actionTypes';
import * as articleSevice from './article';

export default {
    [allTypes.getArticles]: articleSevice.getArticles,
    [allTypes.addTagToArticle]: articleSevice.addTagToArticle,
    [allTypes.deleteArticle]: articleSevice.deleteArticle,
    [allTypes.removeTagFromArticle]: articleSevice.removeTagFromArticle,
    [allTypes.addArticle]: articleSevice.addArticle,
};