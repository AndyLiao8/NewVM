import { Map } from 'immutable';
import { IArticles } from 'src/vm.domain/interfaces/IGlobalState';
import * as types from 'src/vm.domain/actionTypes/article';
import * as articleService from './service/articleService';

const defaultState: IArticles  = {
    ifLoading: false,
    articles: Map(),
};

const stateMapping = {
    [types.beginUpdateArticles]: articleService.beginUpdateArticles,
    [types.endUpdateArticles]: articleService.endUpdateArticles,
    [types.beginUpdateSingleArticle]: articleService.beginOperateArticle,
    [types.endUpdateSingleArticle]: articleService.endUpdateSingleArticle,
    [types.beginDeleteSingleArticle]: articleService.beginOperateArticle,
    [types.endDeleteSingleArticle]: articleService.endDeleteSingleArticle,
    [types.getArticles]: articleService.beginUpdateArticles,
    [types.addTagToArticle]: articleService.beginOperateArticle,
    [types.deleteArticle]: articleService.beginOperateArticle,
    [types.removeTagFromArticle]: articleService.beginOperateArticle,
};

export default (state: IArticles = defaultState, action) => {
    const handler = stateMapping[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}